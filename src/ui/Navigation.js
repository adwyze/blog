import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Link = styled.div`
  width: 30%;
  margin: 40px 0;
  padding: 20px;
  box-shadow: 0px 0px 37px -5px rgba(235, 235, 235, 1);

  @media (max-width: 700px) {
    width: 50%;
  }
`

export { Wrapper, Link }
