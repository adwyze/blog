import styled from "styled-components"

const Wrapper = styled.div``

const Item = styled.div`
  margin-bottom: 1rem;
  padding: 30px 20px;
  border-bottom: 1px solid #efefef;
`

const Title = styled.h1`
  margin-bottom: 0.5rem;
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

export { Item, Title, Meta, Tag, Excerpt, Wrapper }
