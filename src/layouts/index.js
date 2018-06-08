import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import { BlogHeader, Button } from "../ui"

import logo from "../assets/images/Clarisights-blog-logo.svg"

const Header = () => (
  <BlogHeader>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1080,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 27px",
      }}>
      <div
        className="logo"
        style={{
          margin: 0,
          width: 180,
        }}>
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
      <div>
        <Link
          to="/category/growth"
          style={{
            margin: "0 10px",
          }}>
          <Button
            style={{
              color: "#000000",
            }}>
            Growth
          </Button>
        </Link>
        <Link
          to="/category/engineering"
          style={{
            margin: "0 10px",
          }}>
          <Button
            style={{
              color: "#000000",
            }}>
            Engineering
          </Button>
        </Link>
        <Link
          to="/category/design"
          style={{
            margin: "0 10px",
          }}>
          <Button
            style={{
              color: "#000000",
            }}>
            Design
          </Button>
        </Link>
      </div>
    </div>
  </BlogHeader>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1080,
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
