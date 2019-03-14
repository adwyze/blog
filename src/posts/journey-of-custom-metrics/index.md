---
path: "/journey-of-custom-metrics"
date: "2019-02-10"
title: "The journey of Custom Metrics at Clarisights"
description: "This article is about how a simple feature spanned its journey to become one of the most used and also complex features of Clarisights."
robots: "index, nofollow"
tags: ["growth"]
writer: "Pranav Revankar"
headerImg: "https://cdn-images-1.medium.com/max/800/1*LD_lj_uzz9WRTJ0TfHkLVA.png"
---

This article is about how a simple feature spanned its journey to become one of the most used and also complex features of Clarisights. Custom metrics, as the name implies, allows marketers to create their own metrics on Clarisights. For example, to compute the average cost of acquiring a customer, the formula is:

> `Customer Acquisition Cost (CAC) = Cost / Acquisitions`

Basically, the CAC can be calculated by simply dividing all the *costs spent* on acquiring more customers (marketing expenses) by the *number of customers acquired* in the period the money was spent. For example, if a company spent $100 on marketing in a year and acquired 20 customers in the same year, their CAC is $5.00. Looks simple, right? Maybe not!

When the first version of custom metrics was built, in Jan 2018, it could do the above example. But, with a diverse set of customers coming in, we encountered a diverse set of use cases that they brought along:

**Checkpoint 1: Custom metric from multiple data sources**

Clarisights provides integration with every major advertising and analytics channels (data sources) and marketers can build a single dashboard of all these data sources. The ability to build custom metrics from multiple data sources is no brainer. One of the most popular cross-channel custom metric is RoAS i.e. Return on Ad Spend (a.k.a ROI) which equals Revenue/Costs. The Revenue is obtained from Google Analytics, CRMs or App Analytics and the Costs from Advertising channels like Facebook, Google Ads etc.

> `Return on Ad Spend = Revenue(App)+ Revenue(Web)÷ Total Costs`

*Checkpoint reached — March 2018*

**Checkpoint 2: Nested Custom metrics**

For a very long time, we didn’t support nested metrics, i.e. being able to use a custom metric into another custom metric. There was a workaround for this. Say, you want to create a custom metric using RoAS (the custom metric from checkpoint 1). Instead of using RoAS in the formula, you can write it as Revenue/Costs. But soon, the number of nesting started increasing from 2

> `custom metric -> custom metric`

to up to more than 5

> `custom metric -> custom metric -> custom metric -> custom metric....`

and obviously, the workaround couldn’t work. Fast forward to today, we support any kind of nesting of custom metrics in Clarisights.

*Checkpoint reached — May 2018*

**Checkpoint 3: Conditional custom metrics**

Almost every consumer-facing company (e-commerce, takeaway, edtech, etc) operates both an app and a website. The marketing efforts are divided between these two modes of acquiring new customers. Separate ad campaigns run for promoting the app and the website. In fact, the tools used to measure the performance of these campaigns are different as well. Whereas Google Analytics is the most popular choice for measuring website performance, Appsflyer and Adjust are used to measure the performance of App campaigns. You might be wondering where is this leading to? This led to a new feature addition to the custom metrics — custom metric based on conditions. As the revenue of App campaigns was measured in Adjust/Appsflyer and that of web campaigns on Google Analytics, the formula for Total Revenue looked like this:

> `Total Revenue = `

> `IF (Campaign Type="Web") THEN GA:Revenue`
> `ELSEIF (Campaign Type="App") THEN AJ:Revenue`

Maybe the image below from our product exhibits this better -
<center>

![](https://cdn-images-1.medium.com/max/2000/1*voGWxxKoyTGW76FiuEvNPA.png)

</center>

(Note: GA is Google Analytics and AJ is Adjust).

*Checkpoint reached — August 2018*

**Checkpoint 4: Adding functions in custom metric**

To calculate the monthly and weekly run-rate and compare it with the targets, we added the functions like {days remaining in a week}, {days so far in a week} in custom metrics. Marketers can now check if they are at the right pace to hit the monthly targets.
<center>

![](https://cdn-images-1.medium.com/max/2000/1*ezlYgo_A8HHcNZBcqFBFGQ.png)

</center>

*Checkpoint reached — October 2018*

**All Checkpoints reached?**

After multiple iterations, we have now added all the above features in custom metrics. But frankly, we don’t know what’s the final checkpoint for custom metrics. And we don’t want to. Its the journey that is more exciting for us and we are sure there are gonna be many more interesting features in the future.

*We are currently working on a [Weight function](https://en.wikipedia.org/wiki/Weight_function) and supporting date range in the custom metrics formula. Believe me, building some of these is super-tricky and challenging and we are exploring changing our databases to solve this. At Clarisights, we love challenges. If you are someone who loves challenges, I suggest you check out our [careers page](https://clarisights.com/careers).*
