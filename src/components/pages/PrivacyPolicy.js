import React from "react";
import PageFooter from "./Footer";

import {
  pagePrivacyPolicy,
  pagePrivacyPolicyOne,
  pagePrivacyPolicyTwo,
} from "../../config/text";
import { H1, P, DivImg, DivContent } from "../style/styledSubpages";

const PrivacyPolicy = () => {
  return (
    <>
      <DivImg subpage={"privacy"}>
        <DivContent>
          <H1>Polityka prywatności</H1>
          <P>{pagePrivacyPolicy}</P>
          <P>{pagePrivacyPolicyOne}</P>
          <P>{pagePrivacyPolicyTwo}</P>
        </DivContent>
      </DivImg>
      <PageFooter />
    </>
  );
};

export default PrivacyPolicy;
