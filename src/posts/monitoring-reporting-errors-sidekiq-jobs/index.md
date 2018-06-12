---
path: "/monitoring-reporting-errors-sidekiq-jobs"
date: "2018-05-31"
title: "Monitoring and Reporting Errors from Sidekiq Jobs"
description: "How we do error reporting to minimize the impact of failing background jobs"
robots: "index, follow"
writer: "Suraj Nath"
headerImg: "https://dl.dropboxusercontent.com/s/kgzdpdwyr3gn7az/bg1.svg?dl=1"
tags: ["engineering"]
---

<center>
<img src="https://cdn-images-1.medium.com/max/2000/1*nSzDe1v_8LNYr9z3iT1FTA.png" alt="Configuration to Register Sidekiq Sentry Middleware
" title="Configuration to Register Sidekiq Sentry Middleware" />
</center>
<center><i>Configuration to Register Sidekiq Sentry Middleware</i></center><br><br>

Sidekiq is famous (_in the Ruby world_) as an easy and simple background job processing solution. Sidekiq covers almost all the use cases that you expect from a background job processing solution but sometimes you need something that is not supported out of the box. That’s when Sidekiq middleware comes in the picture, middleware can extend Sidekiq to run your code before and during job life cycle.

We, at Granular Insights, use Sidekiq extensively for background jobs. Just like any other piece of software, sometimes background jobs fail. When that happens we want to know why and how that happened.

## Why do we need this?

We wanted to capture every unhandled error from background jobs. We collect all errors in our central error reporting tool (Sentry). Our application is configured to use sentry but we were only getting errors when all retries for a job were exhausted. It was happening because Sidekiq captures any exception occurred in a job (that’s how it decides that a job failed) and uses it to retry failed jobs. It doesn’t raise after capture unless retries are exhausted which will happen after a lot of retries (you can [<u>configure retry</u>](https://github.com/mperham/sidekiq/wiki/Error-Handling#automatic-job-retry) policy).

## Sidekiq Sentry Middleware

Sidekiq has notion of _server-side_ and _client-side_ middleware, Server-side middleware runs around job life cycle while client-side middleware runs before pushing a job to Redis.

We wrote this _server-side middleware_ to report _unhandled_ errors from jobs. If a job fails, our middleware will capture an _unhandled_ exception and report that to Sentry (_can be easily adapted to report to other sources as well_). After reporting, we will raise that exception so Sidekiq & other middlewares down the chain know that the job failed.

Raising captured exception again is important here because, if you don’t raise, Sidekiq or any other middleware down the chain will think that job completed successfully.

<pre><code>
# Sidekiq Middleware to report all errors to sentry
# This is a server-side middleware that reports any exception from any job
# See more: https://github.com/mperham/sidekiq/wiki/Middleware
module Sidekiq::Middleware::Server
  class SentryErrorLogger
    def call(worker, job, queue)
      begin
        yield
      rescue => error
        Raven.capture_exception(error,
                                extra: {
                                  worker: worker,
                                  job: job,
                                  queue: queue
                                })
        # we raise it after reporting it to sentry.
        # Raise is important here because this raise will tell
        # sidekiq to mark this job as failed and move that job in retry queue
        raise
      end
    end
  end
end

</code></pre>

<center><i>Sidekiq Sentry Middleware</i></center><br><br>

## How to use it

Add it in Sidekiq middleware folder and register it in Sidekiq configuration.

<pre><code>
# Add SentryErrorLogger to lib/sidekiq/middleware/server/
# Register SentryErrorLogger in `config/initializers/sidekiq.rb`
Sidekiq.configure_server do |config|
  config.server_middleware do |chain|
    chain.add Sidekiq::Middleware::Server::SentryErrorLogger
  end
end

</code></pre>

<center><i>Configuration to register Sidekiq Sentry middleware</i></center><br><br>

It should work out of the box, provided you have Sentry (or any other source where you want to report) configured in your application.

## Final Thoughts

After we started using Sidekiq error reporting, we were able to minimize the impact of failing background jobs. Now we have more visibility into our background jobs. When jobs fail we get alerts with the stacktrace, which helps a lot during debugging. Early detection results in an early fix, which in turn means minimal impact on users.
