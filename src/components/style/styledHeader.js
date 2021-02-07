import styled from "styled-components";
import { primaryColor } from "../../config/color";
import { sm, md, lg } from "../../config/devices-breakpoints";
import { secondaryColor } from "../../config/color";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  align-items: center;
  width: 100%;
  height: 12vh;
  background-color: ${primaryColor};
  z-index: 10;

  @media (min-width: ${lg}px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid ${secondaryColor};
    padding: 0;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-size: 3rem;
  font-weight: 700;
  z-index: 99;

  @media (min-width: ${sm}px) {
    font-size: 4.3rem;
  }
  @media (min-width: ${md}px) {
    font-size: 4.9rem;
  }
`;

const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: bold;

  @media (min-width: ${sm}px) {
    font-size: 2.9rem;
  }
  @media (min-width: ${md}px) {
    font-size: 3.3rem;
  }
  @media (min-width: ${lg}px) {
    font-size: 2.2rem;
    padding-left: 2rem;
    z-index: 9999999;
  }
`;

export { Header, Button, Logo };
