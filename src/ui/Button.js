import styled from "styled-components"

const ButtonHeader = styled.button`
  border: 1px solid #fff;
  cursor: pointer;
  background: transparent;
  color: #fff;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  position: relative;
  z-index: 200;

  &:before {
    content: "";
    position: absolute;
    left: 5%;
    bottom: 7px;
    width: 90%;
    height: 45px;
    background: rgba(249, 240, 194, 0.8);
    transform: translateY(-45px);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.1s linear, transform 0.35s ease;
  }

  &: hover {
    &:before {
      transform: translateY(5px);
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    &:before {
      display: none;
    }
  }
`

const Button = styled.button`
  border: 1px solid #fff;
  cursor: pointer;
  background: transparent;
  color: #fff;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  position: relative;
`

export { ButtonHeader, Button }
