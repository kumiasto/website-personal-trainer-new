import styled from "styled-components";
import { secondaryColor } from "../../config/color";

const DesktopDiv = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
`;

const ElementDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33%;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  transition 0.3s;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: ${secondaryColor};    
    opacity: .3;
    transition: 0.4s;
    transition-delay: .1s;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 0;
    background-color: ${secondaryColor};
    opacity: .3;
    transition: 0.4s;
    z-index: -1;
  }
  &:hover::before {
    width: 100%;
  }
  &:hover::after {
    height: 100%;
  }

  
`;
export { DesktopDiv, ElementDiv };
