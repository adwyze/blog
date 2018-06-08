import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import {
  PostContainer,
  PostTitle,
  PostBody,
  PostMeta,
  PostHeaderImage,
} from "../ui"

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
  pathContext,
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { next, prev } = pathContext
  return (
    <div>
      <PostContainer>
        <Helmet
          title={`${post.frontmatter.title} - Granular Insights Blog`}
          meta={[
            {
              name: "description",
              content: post.frontmatter.description,
            },
            {
              name: "robots",
              content: post.frontmatter.robots,
            },
          ]}
        />
        <PostHeaderImage source={post.frontmatter.headerImg} />
        <PostTitle>
          <h1>{post.frontmatter.title}</h1>
        </PostTitle>
        <PostMeta>Published on {post.frontmatter.date}</PostMeta>
        <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
        </p>
        <p>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </p>
      </PostContainer>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        writer
        robots
        headerImg
        featured
        description
      }
    }
  }
`
