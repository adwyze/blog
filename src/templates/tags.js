import React from "react"
import PropTypes from "prop-types"

import { PreviewList, Tag } from "../ui"
// Components
import Link from "gatsby-link"

const Tags = ({ pathContext, data }) => {
  const { posts, tagName } = pathContext
  const tagNameDisplay = tagName.charAt(0).toUpperCase() + tagName.slice(1)
  if (posts) {
    return (
      <div>
        <Tag.Header>{tagNameDisplay}</Tag.Header>
        <PreviewList.Wrapper>
          {posts.map((post, index) => {
            return (
              <PreviewList.Item key={post.id}>
                <PreviewList.ImgBg source={post.frontmatter.headerImg} />
                <PreviewList.Content>
                  <Link
                    style={{
                      display: "block",
                      textDecoration: "none !important",
                    }}
                    to={post.frontmatter.path}>
                    <PreviewList.Title>
                      {post.frontmatter.title}
                    </PreviewList.Title>
                  </Link>
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
                        By {post.frontmatter.writer}
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
              </PreviewList.Item>
            )
          })}
        </PreviewList.Wrapper>
      </div>
    )
  }
}

export default Tags
