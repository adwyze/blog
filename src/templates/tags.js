import React from "react"
import PropTypes from "prop-types"

// Components
import Link from "gatsby-link"

const Tags = ({ pathContext, data }) => {
  const { posts, tagName } = pathContext
  console.log("Tags", tagName)

  if (posts) {
    return (
      <div>
        <span>{tagName}</span>
        <ul>
          {posts.map((post, index) => {
            return <li key={index}>{post.frontmatter.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Tags
