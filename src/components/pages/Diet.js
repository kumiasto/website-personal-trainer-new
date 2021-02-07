import React from "react";
import PageFooter from "./Footer";

import { H1, P, Li, Ul, DivImg, DivContent } from "../style/styledSubpages";
import { pageDiet } from "../../config/text";

const PageDiet = () => {
  const elements = [
    "Dzienne zapotrzebowanie kalorii",
    "Dokładnie rozpisane makroskładniki (białko, węglowowany i tłuszcze)",
    "Rekompozycja ciała",
    "Budowanie beztłuszczowej masy mięśniowej",
    "Redukcja tkanki tłuszczowej",
    "Przygotowanie do zawodów",
  ];

  const renderList = elements.map((element, index) => (
    <Li key={index}>{element}</Li>
  ));

  return (
    <>
      <DivImg subpage={"diet"}>
        <DivContent>
          <H1>Dieta</H1>
          <P>{pageDiet}</P>
          <Ul>{renderList}</Ul>
        </DivContent>
      </DivImg>
      <PageFooter />
    </>
  );
};

export default PageDiet;
