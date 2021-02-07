import React from "react";
import PageFooter from "./Footer";

import { H1, P, Li, Ul, DivImg, DivContent } from "../style/styledSubpages";
import { pageTrainingPlanOne, pageTrainingPlanTwo } from "../../config/text";

const PageTrainingPlan = () => {
  const elements = [
    "Plan treningowy na 4 tygodnie",
    "Profesjonalna periodyzacja",
    "Plan pod uprawianą dyscyplinę sportową",
    "Stały kontakt mailowy / fb",
    "Dobór obciążeń zależności od Twojego stażu treningowego",
    "Uwzględnienie kontuzji oraz wad postawy",
    "Plan na rekompozycję ciała",
  ];

  const renderList = elements.map((element, index) => (
    <Li key={index}>{element}</Li>
  ));

  return (
    <>
      <DivImg subpage={"training-plan"}>
        <DivContent>
          <H1>Plan treningowy</H1>
          <P>{pageTrainingPlanOne}</P>
          <P>{pageTrainingPlanTwo}</P>
          <Ul>{renderList}</Ul>
        </DivContent>
      </DivImg>
      <PageFooter />
    </>
  );
};

export default PageTrainingPlan;
