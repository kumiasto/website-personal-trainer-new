import React from "react";
import { Link } from "react-router-dom";

import {
  Footer,
  Heading,
  DivFooter,
  DivContact,
  ContactElement,
  DivType,
  ContactInfo,
  DivBlogLink,
  BlogLink,
  PrivacyPolicy,
} from "../style/styledFooter";
import { pageName } from "../../config/text";

import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

const PageFooter = () => {
  const phoneNumber = "511 - 258 - 922";
  const email = "kontakt@trenerkarlinski.pl";
  const date = new Date();
  const pageDate = date.getFullYear();

  return (
    <Footer>
      <DivContact>
        <ContactInfo>
          <Heading color={"white"}>Zapraszam do kontaktu:</Heading>
          <DivType>
            <FaMobileAlt />
            <ContactElement>{phoneNumber}</ContactElement>
          </DivType>
          <DivType>
            <FaEnvelope />
            <ContactElement>{email}</ContactElement>
          </DivType>
        </ContactInfo>
        <DivBlogLink>
          <Heading color={"green"}>Koniecznie odwiedź mojego bloga</Heading>
          <BlogLink href="https://zachlorowani.pl" target="_blank">
            zachlorowani.pl
          </BlogLink>
        </DivBlogLink>
      </DivContact>

      <DivFooter>
        <Link to="/polityka-prywatności">
          <PrivacyPolicy>Polityka prywatności</PrivacyPolicy>
        </Link>
        © {pageDate} {pageName}
      </DivFooter>
    </Footer>
  );
};

export default PageFooter;
