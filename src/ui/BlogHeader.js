import styled from "styled-components"
import bg from "../assets/images/bg1.svg"

const BlogHeader = styled.div`
  background-color: #ffffff;
  height: 80px;
  padding: 20px 0 10px 0;

  @media (max-width: 700px) {
    height: 160px;
    width: 100vw;
    display: flex;
    margin-top: 20px;
    text-align: right;
  }
`
export default BlogHeader
