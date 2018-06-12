import styled from "styled-components"

const PostBody = styled.div`
  p,
  li,
  code,
  pre,
  span,
  div {
    font-size: 21px;
    line-height: 1.58;
    color: #1a1a1a;

    @media (max-width: 700px) {
      padding: 0 5px;
    }
  }
  a {
    text-decoration: underline !important;
  }
`

export default PostBody
