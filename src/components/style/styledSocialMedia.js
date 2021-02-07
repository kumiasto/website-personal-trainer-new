import styled from "styled-components";
import { sm, md, lg } from "../../config/devices-breakpoints";

const SocialDiv = styled.div`
  min-width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.8rem;
  color: #fff;
  padding-top: 2rem;
  @media (min-width: ${sm}px) {
    padding-top: 2rem;
    font-size: 2.5rem;
  }
  @media (min-width: ${md}px) {
    padding-top: 3rem;
    font-size: 3rem;
  }
  @media (min-width: ${lg}px) {
    font-size: 3rem;
    color: #fff;
  }
`;

const SocialDivElement = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:nth-child(2) {
    margin-left: 0.1rem;
  }
`;

const SocialMediaLink = styled.a`
  color: #fff;
  @media (min-width: ${lg}px) {
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 100%;
      opacity: 0.8;
      transition: 0.4s;
      z-index: -1;
      background: ${(props) => {
        if (props.id === 1) {
          return "#4267B2;";
        } else {
          return `linear-gradient(
        45deg,
        #405de6,
        #5851db,
        #833ab4,
        #c13584,
        #e1306c,
        #fd1d1d
      );`;
        }
      }};
    }

    &:hover::before {
      width: 100%;
      border-radius: 5px;
    }
  }
`;

export { SocialDiv, SocialDivElement, SocialMediaLink };
