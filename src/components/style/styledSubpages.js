import styled from "styled-components";
import { secondaryColor, thirdColor } from "../../config/color";
import { sm, md, lg } from "../../config/devices-breakpoints";

import imageMainOne from "../pages/img/personal-training.jpg";
import imageMainTwo from "../pages/img/training-plan.jpg";
import imageMainThree from "../pages/img/diet.jpg";
import PrivacyPolicy from "../pages/img/privacy.jpg";

const DivImg = styled.div`
  @media (min-width: ${lg}px) {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 8rem;
    background-image: ${({ subpage }) => {
      switch (subpage) {
        case "personal-training":
          return `url(${imageMainOne})`;
        case "training-plan":
          return `url(${imageMainTwo})`;
        case "diet":
          return `url(${imageMainThree})`;
        case "privacy":
          return `url(${PrivacyPolicy})`;
        default:
          return null;
      }
    }};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.7;
      background-color: black;
    }
  }
`;

const DivContent = styled.div`
  @media (min-width: ${lg}px) {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding-bottom: 3rem;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin: 2rem;
  padding-top: 2rem;
  color: ${secondaryColor};

  @media (min-width: ${sm}px) {
    margin: 3rem 1rem;
    font-size: 4rem;
  }
  @media (min-width: ${lg}px) {
    margin: 0;
    font-size: 3.4rem;
  }
`;

const P = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  margin: 1.1rem;
  line-height: 1.5rem;
  color: ${thirdColor};
  font-size: 1.3rem;

  @media (min-width: ${sm}px) {
    margin: 0 2rem;
    font-size: 2.1rem;
    line-height: 3rem;
  }
  @media (min-width: ${md}px) {
    padding-top: 2rem;
    font-size: 2rem;
  }
}
  @media (min-width: ${lg}px) {
    margin: 0 10rem;
    font-size: 1.7rem;  
    color: #fff;

  }
`;

const Ul = styled.ul`
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const Li = styled.li`
  text-align: center;
  color: ${secondaryColor};
  margin-top: 1.2rem;
  font-size: 1.2rem;

  @media (min-width: ${sm}px) {
    font-size: 1.9rem;
    margin: 1.2rem 3rem;
  }

  @media (min-width: ${md}px) {
    font-size: 2.5rem;
    margin: 1.2rem 3rem;
  }
  @media (min-width: ${lg}px) {
    font-size: 1.6rem;
  }
`;

export { DivImg, DivContent, H1, P, Ul, Li };
