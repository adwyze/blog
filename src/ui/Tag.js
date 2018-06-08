import styled from "styled-components"

const Header = styled.span`
  font-size: 1.5rem;
  font-family: "ClarisightsR";
  display: inline-block;
  padding: 20px 15px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 18%;
    width: 100%;
    height: 45px;
    border-radius: 4px;
    background: rgba(214, 228, 197, 0.8);
    z-index: -1;
  }
`
export { Header }
