import styled from "styled-components";
import { primaryColor, secondaryColor, thirdColor } from "../../config/color";
import { sm, md, lg } from "../../config/devices-breakpoints";

import imageMobile from "../pages/img/mobile.jpg";
import imageDesktop from "../pages/img/desktop.jpg";
import imageMainOne from "../pages/img/personal-training.jpg";
import imageMainTwo from "../pages/img/training-plan.jpg";
import imageMainThree from "../pages/img/diet.jpg";

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${imageMobile});
  background-repeat: no-repeat;
  background-image: cover;
  width: 100%;
  min-height: 80vh;

  @media (min-width: ${sm}px) {
    background-image: url(${imageDesktop});
    min-height: 75vh;
  }

  @media (min-width: ${md}px) {
    min-height: 80vh;
    background-size: auto 80vh;
  }

  @media (min-width: ${lg}px) {
    min-height: 95vh;
    position: absolute;
    top: 0;
    left: 0;
    background-size: 250vh 170vh;
    border-bottom: 1px solid ${secondaryColor};
  }
`;
const DivName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 33vh;
  background-color: rgba(0, 153, 255, 0.5);
  @media (min-width: ${lg}px) {
    justify-content: center;
    width: 50%;
    min-height: 83vh;
    background-color: transparent;
    border-bottom: 0;
    border-top: 0;
  }
`;

const PContent = styled.div`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  padding-top: 2.2rem;
  letter-spacing: 0.4rem;
  font-weight: 700;

  @media (min-width: ${sm}px) {
    font-size: 4rem;
    padding-top: 3rem;
  }
  @media (min-width: ${md}px) {
    font-size: 4.4rem;
  }
  @media (min-width: ${lg}px) {
    color: ${primaryColor};
  }
`;

const DivAbout = styled.div`
  width: 100%;
  @media (min-width: ${lg}px) {
    margin-top: 80vh;
  }
`;

const H1About = styled.div`
  text-align: center;
  padding-top: 4rem;
  font-size: 3rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  color: ${secondaryColor};

  @media (min-width: ${sm}px) {
    padding-top: 7rem;
    font-size: 4rem;
  }
  @media (min-width: ${lg}px) {
    padding-top: 13rem;
    font-size: 3rem;
  }
`;

const H1Achievements = styled.div`
  text-align: center;
  padding-top: 1rem;
  font-size: 2rem;
  margin: 0 2rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  color: ${secondaryColor};

  @media (min-width: ${sm}px) {
    padding-top: 2rem;
    font-size: 2.7rem;
  }

  @media (min-width: ${md}px) {
    font-size: 2.5rem;
  }
`;

const LiElements = styled.li`
  text-align: center;
  margin: 1rem 3rem;
  font-weight: 700;
  color: ${thirdColor};
  padding-top: 0.5rem;
  font-size: 1.3rem;

  @media (min-width: ${sm}px) {
    padding-top: 2rem;
    font-size: 1.9rem;
  }
  @media (min-width: ${lg}px) {
    padding-top: 0.4rem;
  }
`;

const PAbout = styled.p`
  text-align: center;
  margin: 1.1rem 2rem;
  font-size: 1.3rem;
  line-height: 1.3;
  color: ${thirdColor};

  @media (min-width: ${sm}px) {
    margin: 1.3rem 3rem;
    font-size: 2.2rem;
    line-height: 1.3;
  }

  @media (min-width: ${md}px) {
    font-size: 2.4rem;
  }
  @media (min-width: ${lg}px) {
    font-size: 1.5rem;
    margin: 1rem 15rem;
    padding-top: 0.2rem;
  }
`;

const SectionOffer = styled.section`
  content-visibility: auto;
  width: 100%;
  margin-top: 2rem;
  padding-top: 1rem;

  @media (min-width: ${sm}px) {
    padding-top: 4rem;
  }
`;

const DivOffer = styled.div`  
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vh 1vh;
  background-repeat: no-repeat;
  background-size: cover;
  z-index:2;
  background-image: ${({ id }) => {
    switch (id) {
      case 0:
        return `url(${imageMainOne})`;
      case 1:
        return `url(${imageMainTwo})`;
      case 2:
        return `url(${imageMainThree})`;
      default:
        return null;
    }
  }};
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0.7;
    background-color: black;
  }

`;

const ButtonOffer = styled.button`
  position: relative;
  padding: .7rem 1.6rem;
  margin-top: 3rem;
  border-radius: 40px;
  font-size: 1.1rem;
  background-color: transparent;
  border: 2px solid ${secondaryColor};
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.1rem;
  cursor: pointer;
  @media (min-width: ${sm}px) {
    padding:1rem 2.2rem;
    font-size: 1.8rem;

  @media (min-width: ${lg}px) {
    padding: .8rem 2rem;
    font-size: 1.5rem;

    
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 40px;
    overflow: hidden;
    width: 0;
    height: 100%;
    background-color:transparent;
    opacity: .3;
    transition: 2s;
    transition-delay: .1s;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: transparent; 
    opacity: .3;
    transition: 1s;
    z-index: -1;
    border-radius: 40px;
    overflow: hidden;

  }
  &:hover::before {
    width: 100%;
    background-color: rgba(0,0,0,1);    

  }
  &:hover::after {
    width: 100%;
    background-color: rgba(229, 140, 52, .7);
  }
`;

const POffer = styled.p`
  text-align: center;
  margin: 1.1rem 1.3rem;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #fff;
  z-index: 1;

  @media (min-width: ${sm}px) {
    margin: 1.1rem 5rem;
    font-size: 2.2rem;
  }

  @media (min-width: ${md}px) {
    font-size: 2.3rem;
  }
  @media (min-width: ${lg}px) {
    margin: 0 15rem;
  }
`;
const H2Offer = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: ${secondaryColor};
  z-index: 1;

  @media (min-width: ${sm}px) {
    font-size: 4rem;
  }

  @media (min-width: ${md}px) {
    font-size: 4rem;
  }
`;

export {
  DivContent,
  DivName,
  PContent,
  DivAbout,
  H1About,
  H1Achievements,
  LiElements,
  PAbout,
  SectionOffer,
  DivOffer,
  ButtonOffer,
  POffer,
  H2Offer,
};
