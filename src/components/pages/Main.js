import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageFooter from "./Footer";
import {
  mainPageOne,
  mainPageTwo,
  pageTrainingPlanOne,
  pagePersonal,
  pageDiet,
} from "../../config/text";
import {
  DivContent,
  DivName,
  DivAbout,
  PContent,
  H1About,
  PAbout,
  H1Achievements,
  LiElements,
  SectionOffer,
  DivOffer,
  ButtonOffer,
  POffer,
  H2Offer,
} from "../style/styledMainPage";

import SocialMedia from "../SocialMedia";
import Modal from "../Modal";

const MainPage = () => {
  const elements = [
    "Srebrny Medalista Mistrzostw Świata 2017 IPC",
    "Brązowy Medalista Mistrzostw Europy 2014 i 2016 IPC",
    "Wielokrotny Medalista i Rekordzista Polski",
  ];

  const [cookies, setCookies] = useState("");

  const buttonText = "Zobacz więcej";

  const offerElements = {
    trainingPlan: {
      header: "Plan treningowy",
      text: `${pageTrainingPlanOne}`,
      link: "plan-treningowy",
    },
    personal: {
      header: "Trening personalny",
      text: `${pagePersonal}`,
      link: "trening-personalny",
    },
    diet: {
      header: "Dieta",
      text: `${pageDiet}`,
      link: "dieta",
    },
  };

  const offer = [
    offerElements.trainingPlan,
    offerElements.personal,
    offerElements.diet,
  ];

  function checkCookies() {
    const cookiesInfo = localStorage.getItem("cookies");
    setCookies(cookiesInfo);
  }

  useEffect(() => {
    checkCookies();
  }, []);

  const renderOffer = offer.map((element, index) => {
    return (
      <DivOffer key={element.link} id={index}>
        <H2Offer data-aos="fade-left">{element.header}</H2Offer>
        <POffer data-aos="fade-left">{element.text}</POffer>
        <Link to={`/${element.link}`} style={{ zIndex: 1 }} data-aos="fade-up">
          <ButtonOffer>{buttonText}</ButtonOffer>
        </Link>
      </DivOffer>
    );
  });

  const renderElement = elements.map((element) => (
    <LiElements key={element}>{element}</LiElements>
  ));

  return (
    <>
      <DivContent>
        <DivName>
          <PContent data-aos="fade-in">
            Patryk <br /> Karliński
          </PContent>
          <SocialMedia />
        </DivName>
      </DivContent>
      <DivAbout>
        <H1About>O mnie</H1About>
        <PAbout>{mainPageOne}</PAbout>
        <PAbout>{mainPageTwo}</PAbout>
        <H1Achievements>Moje największe osiągnięcia</H1Achievements>
        {renderElement}
      </DivAbout>
      <SectionOffer>{renderOffer}</SectionOffer>
      {cookies ? null : <Modal />}
      <PageFooter />
    </>
  );
};

export default MainPage;
