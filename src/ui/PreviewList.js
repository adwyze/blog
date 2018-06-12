import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-decoration: none !important;
`

const Item = styled.div`
  flex-basis: 46%;
  margin: 2%;
  margin-bottom: 30px;
  position: relative;
  height: 50vh;
  min-height: ${props => (props.featured ? "580px" : "480px")};
  overflow: hidden;
  background: white;
  border-radius: 4px;
  transition: transform 0.35s ease;
  transform: scale(0.98);
  box-shadow: 0px 0px 37px -5px rgba(235, 235, 235, 1);
  &:hover {
    transform: scale(1);
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`

const ImgBg = styled.div`
  background-color: #dcb8c0;
  width: 100%;
  height: 60%;
  z-index: 1;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => (props.source ? `url(${props.source});` : "")};
`

const Content = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  width: 85%;
  background: white;
  left: ${props => (props.featured ? "5%" : "2%")};
  padding: 20px;
  border-radius: 4px;

  @media (max-width: 700px) {
    width: 95%;
    left: 2%;
    bottom: 10vh;
  }
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

  @media (max-width: 700px) {
    font-size: 30px;
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
  list-style: none;
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
    border: 1px solid #d6e4c5;
    padding: 2px 10px;
    border-radius: 4px;
    transition: background 0.3s ease;
    text-decoration: none !important;
    &:hover {
      background: #d6e4c5;
      color: #000000;
    }
  }
`

export { Item, Title, ImgBg, Content, Meta, Tag, Excerpt, Wrapper }
