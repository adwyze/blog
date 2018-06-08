import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Item = styled.div`
  border-bottom: 1px solid #efefef;
  flex-basis: 48%;
  margin: 1%;
  position: relative;
  height: 50vh;
  min-height: ${props => (props.featured ? "580px" : "480px")};
  overflow: hidden;
  background: white;
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`

const ImgBg = styled.div`
  background-color: #dcb8c0;
  width: 100%;
  height: 60%;
  z-index: 1;
  padding-top: 40px;
  background-image: url();
  position: absolute;
  background-repeat: no-repeat;
  background-position: right;
`

const Content = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  width: 85%;
  background: white;
  left: ${props => (props.featured ? "5%" : "2%")};
  padding: 20px;
`

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: ${props => (props.featured ? "2.5rem" : "1.7rem")};
  a {
    font-size: inherit;
    color: #000;
    text-decoration: none;
  }
  a:hover {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
  }
`

const Meta = styled.div`
  font-size: 12px;
  color: #a1a1a1;
`

const Excerpt = styled.div`
  font-size: 14px;
`

const Tag = styled.ul`
  font-size: 12px;
`

export { Item, Title, ImgBg, Content, Meta, Tag, Excerpt, Wrapper }
