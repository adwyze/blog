import React from "react"
import Helmet from "react-helmet"
import { PostContainer, PostTitle, PostBody, PostMeta } from "../ui"

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
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
      <PostTitle>
        <h1>{post.frontmatter.title}</h1>
      </PostTitle>
      <PostMeta>Published on {post.frontmatter.date}</PostMeta>
      <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostContainer>
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
        robots
      }
    }
  }
`
