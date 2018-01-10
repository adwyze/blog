import styled from "styled-components"

const Wrapper = styled.div``

const Item = styled.div`
  margin-bottom: 1rem;
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
  color: #adadad;
`

const Excerpt = styled.div`
  font-size: 14px;
`

export { Item, Title, Meta, Excerpt, Wrapper }
