import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from "styled-components"

import { BlogHeader, Button, BlogFooter } from "../ui"

import logo from "../assets/images/Clarisights-blog-logo.svg"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vh;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Header = () => (
  <BlogHeader>
    <Container>
      <div
        className="logo"
        style={{
          margin: 0,
          width: 200,
          paddintTop: 5,
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
          to="/category/engineering"
          style={{
            margin: "0 10px",
          }}>
          <Button.ButtonHeader
            style={{
              color: "#000000",
              fontFamily: "ClarisightsR",
            }}>
            Engineering
          </Button.ButtonHeader>
        </Link>
        <Link
          to="/category/growth"
          style={{
            margin: "0 10px",
          }}>
          <Button.ButtonHeader
            style={{
              color: "#000000",
              fontFamily: "ClarisightsR",
            }}>
            Growth
          </Button.ButtonHeader>
        </Link>
        <Link
          to="/category/design"
          style={{
            margin: "0 10px",
          }}>
          <Button.ButtonHeader
            style={{
              color: "#000000",
              fontFamily: "ClarisightsR",
            }}>
            Design
          </Button.ButtonHeader>
        </Link>
      </div>
    </Container>
  </BlogHeader>
)

const Footer = () => (
  <BlogFooter>
    <Container>
      <div>
        <a
          href="http://www.clarisights.com/"
          style={{
            margin: "0 10px",
            textDecoration: "none",
          }}>
          <Button.Button
            style={{
              color: "#000000",
              fontFamily: "ClarisightsR",
            }}>
            clarisights.com
          </Button.Button>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/company/clarisights"
          style={{
            margin: "0 10px",
            textDecoration: "none",
          }}>
          <Button.Button
            style={{
              color: "#000000",
              fontFamily: "ClarisightsR",
            }}>
            LinkedIn
          </Button.Button>
        </a>
        <a
          href="https://dribbble.com/clarisights"
          style={{
            margin: "0 10px",
            textDecoration: "none",
          }}>
          <Button.Button
            style={{
              color: "#000000",
              fontFamily: "ClarisightsR",
            }}>
            Dribbble
          </Button.Button>
        </a>
        <a
          href="http://twitter.com/clarisights"
          style={{
            margin: "0 10px",
            textDecoration: "none",
          }}>
          <Button.Button
            style={{
              color: "#000000",
              fontFamily: "ClarisightsR",
            }}>
            Twitter
          </Button.Button>
        </a>
      </div>
    </Container>
  </BlogFooter>
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
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
