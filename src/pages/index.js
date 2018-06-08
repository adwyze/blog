import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { PreviewList } from "../ui"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  const featuredPosts = posts.filter(
    post =>
      post.node.frontmatter.title.length > 0 && post.node.frontmatter.featured
  )
  return (
    <div>
      <Helmet
        title="Granular Insights Blog"
        meta={[
          { name: "description", content: "marketing insights for humans" },
          {
            name: "keywords",
            content:
              "marketing, visualisation, granular, ads, tableau, data studio, quicksight",
          },
        ]}
      />
      <div>
        {featuredPosts.map(({ node: post }) => (
          <PreviewList.Item featured key={post.id}>
            <PreviewList.ImgBg />
            <PreviewList.Content featured>
              <PreviewList.Title featured>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </PreviewList.Title>
              <PreviewList.Meta>{post.frontmatter.date}</PreviewList.Meta>
              <PreviewList.Tag>
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/category/${tag}`}>{tag}</Link>
                      </li>
                    )
                  })}
              </PreviewList.Tag>
              <PreviewList.Excerpt>{post.excerpt}</PreviewList.Excerpt>
            </PreviewList.Content>
          </PreviewList.Item>
        ))}
      </div>
      <PreviewList.Wrapper>
        {posts
          .filter(
            post =>
              post.node.frontmatter.title.length > 0 &&
              !post.node.frontmatter.featured
          )
          .map(({ node: post }) => {
            return (
              <PreviewList.Item key={post.id}>
                <PreviewList.ImgBg />
                <PreviewList.Content>
                  <PreviewList.Title>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </PreviewList.Title>
                  <PreviewList.Meta>{post.frontmatter.date}</PreviewList.Meta>
                  <PreviewList.Tag>
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map((tag, index) => {
                        return (
                          <li key={index}>
                            <Link to={`/category/${tag}`}>{tag}</Link>
                          </li>
                        )
                      })}
                  </PreviewList.Tag>
                  <PreviewList.Excerpt>{post.excerpt}</PreviewList.Excerpt>
                </PreviewList.Content>
              </PreviewList.Item>
            )
          })}
      </PreviewList.Wrapper>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            headerImg
            featured
          }
        }
      }
    }
  }
`
