import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../config/color";
import { sm, md } from "../../config/devices-breakpoints";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  min-height: 100%;
  z-index: 99;
  animation-name: slideInRight;
  -webkit-animation-duration: .4s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

  @keyframes slideInRight {
  0% {
  transform: translateX(100%);
  visibility: visible;
  }
  100% {
  transform: translateX(0);
  }
} 
`;

const UlElement = styled.ul`
  width: 100%;
`;

const LiElement = styled.li`
  padding-top: 2rem;
  font-size: 1.9rem;
  text-align: center;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.1rem;

  @media (min-width: ${sm}px) {
    font-size: 3rem;
    padding-top: 3.5rem;
  }
  @media (min-width: ${md}px) {
    font-size: 4rem;
    padding-top: 4.5rem;
  }
`;

const A = styled.a`
  color: #fff;
`;

const Button = styled.button`
  border: none;
  border-bottom: 0.1rem solid ${secondaryColor};
  font-size: 2.6rem;
  color: #fff;
  background-color: transparent;
  padding: 1rem 1rem;
  outline: none;

  @media (min-width: ${sm}px) {
    font-size: 4rem;
    border-bottom: 0.2rem solid ${secondaryColor};
  }

  @media (min-width: ${md}px) {
    font-size: 4.5rem;
  }
`;
export { Nav, UlElement, LiElement, A, Button };
