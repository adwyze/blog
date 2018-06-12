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
        title="Clarisights Insights Blog"
        meta={[
          { name: "description", content: "marketing insights for humans" },
          {
            name: "keywords",
            content:
              "clarisights, marketing, visualisation, granular, ads, tableau, data studio, quicksight",
          },
        ]}
      />
      <div>
        {featuredPosts.map(({ node: post }, index) => (
          <PreviewList.Item featured key={post.id}>
            <Link to={post.frontmatter.path}>
              <PreviewList.ImgBg source={post.frontmatter.headerImg} />
              <PreviewList.Content featured>
                <PreviewList.Title featured>
                  {post.frontmatter.title}
                </PreviewList.Title>
                <PreviewList.Meta>{post.frontmatter.date}</PreviewList.Meta>
                <PreviewList.Excerpt>
                  {post.frontmatter.description}
                </PreviewList.Excerpt>
                <div
                  style={{
                    display: "flex",
                    fontSize: "0.8rem",
                    fontFamily: "ClarisightsR",
                  }}>
                  {post.frontmatter.writer ? (
                    <p>
                      By {post.frontmatter.writer}{" "}
                      <span style={{ margin: "0 5px" }}>/</span>
                    </p>
                  ) : null}
                  {post.frontmatter.tags &&
                    post.frontmatter.tags.map((tag, index) => {
                      return (
                        <PreviewList.Tag>
                          <li key={index}>
                            <Link to={`/category/${tag}`}>{tag}</Link>
                          </li>
                        </PreviewList.Tag>
                      )
                    })}
                </div>
              </PreviewList.Content>
            </Link>
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
          .map(({ node: post }, index) => {
            return (
              <PreviewList.Item key={post.id}>
                <Link to={post.frontmatter.path} key={index}>
                  <PreviewList.ImgBg source={post.frontmatter.headerImg} />
                  <PreviewList.Content>
                    <PreviewList.Title>
                      {post.frontmatter.title}
                    </PreviewList.Title>
                    <PreviewList.Meta>{post.frontmatter.date}</PreviewList.Meta>
                    <PreviewList.Excerpt>
                      {post.frontmatter.description}
                    </PreviewList.Excerpt>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "0.8rem",
                        fontFamily: "ClarisightsR",
                      }}>
                      {post.frontmatter.writer ? (
                        <p>
                          By {post.frontmatter.writer}{" "}
                          <span style={{ margin: "0 5px" }}>/</span>
                        </p>
                      ) : null}
                      {console.log("Tag", post.frontmatter.tags)}
                      {post.frontmatter.tags &&
                        post.frontmatter.tags.map((tag, index) => {
                          return (
                            <PreviewList.Tag>
                              <li key={index}>
                                <Link to={`/category/${tag}`}>{tag}</Link>
                              </li>
                            </PreviewList.Tag>
                          )
                        })}
                    </div>
                  </PreviewList.Content>
                </Link>
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
            writer
            headerImg
            featured
            description
          }
        }
      }
    }
  }
`
