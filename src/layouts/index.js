import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { BlogHeader, Button } from "../ui"

import logo from "../assets/images/logo.svg"

const Header = () => (
  <BlogHeader>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.5rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <div className="logo" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}>
          <img
            src={logo}
            style={{
              marginBottom: 0,
            }}
          />
        </Link>
      </div>
      <a href="https://granularhq.com">
        <Button>Go to GranularHQ.com</Button>
      </a>
    </div>
  </BlogHeader>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
