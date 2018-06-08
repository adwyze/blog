import React from "react"
import PropTypes from "prop-types"

import { PreviewList } from "../ui"
// Components
import Link from "gatsby-link"

const Tags = ({ pathContext, data }) => {
  const { posts, tagName } = pathContext
  console.log("Tags", tagName)

  if (posts) {
    return (
      <div>
        <span>{tagName}</span>
        <PreviewList.Wrapper>
          {posts.map((post, index) => {
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
}

export default Tags
