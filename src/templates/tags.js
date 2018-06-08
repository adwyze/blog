import React from "react"
import PropTypes from "prop-types"

import { PreviewList, Tag } from "../ui"
// Components
import Link from "gatsby-link"

const Tags = ({ pathContext, data }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <div>
        <Tag.Header>{tagName}</Tag.Header>
        <PreviewList.Wrapper>
          {posts.map((post, index) => {
            return (
              <PreviewList.Item key={post.id}>
                <Link to={post.frontmatter.path} key={index}>
                  <PreviewList.ImgBg source={post.frontmatter.headerImg} />
                  <PreviewList.Content>
                    <PreviewList.Title>
                      {post.frontmatter.title}
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
                </Link>
              </PreviewList.Item>
            )
          })}
        </PreviewList.Wrapper>
      </div>
    )
  }
}

export default Tags
