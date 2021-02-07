import React from "react";
import PageFooter from "./Footer";

import { H1, P, Li, Ul, DivImg, DivContent } from "../style/styledSubpages";
import {
  pagePersonalOne,
  pagePersonalTwo,
  pagePersonalThree,
} from "../../config/text";
const PageDietPlan = () => {
  const elements = [
    "Nauka od podstaw",
    "Nauka czterech stylów",
    "Pływanie sportowe",
    "Nagrywanie i analiza techniki",
    "Rozpisanie treningów",
  ];

  const renderList = elements.map((element, index) => (
    <Li key={index}>{element}</Li>
  ));

  return (
    <>
      <DivImg subpage={"personal-training"}>
        <DivContent>
          <H1>Trening siłowy</H1>
          <P>{pagePersonalOne}</P>
          <P>{pagePersonalTwo}</P>
          <H1>Trening pływacki</H1>
          <P>{pagePersonalThree}</P>
          <Ul>{renderList}</Ul>
        </DivContent>
      </DivImg>

      <PageFooter />
    </>
  );
};

export default PageDietPlan;
