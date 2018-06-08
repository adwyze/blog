import styled from "styled-components"

const PostHeaderImage = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 300px;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  background-image: ${props => (props.source ? `url(${props.source});` : "")};
`

export default PostHeaderImage
