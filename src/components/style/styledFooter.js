import styled from "styled-components";
import { secondaryColor } from "../../config/color";
import { sm, lg } from "../../config/devices-breakpoints";
import footerImage from "../pages/img/footer.png";

const Footer = styled.footer`
  background-image: url(${footerImage});
  content-visibility: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 35vh;
  background-color: #fff;
  @media (min-width: ${sm}px) {
    min-height: 27vh;
  }
`;

const Heading = styled.h2`
  text-align: center;
  padding-top: 2rem;
  color: ${(props) => {
    if (props.color === "white") {
      return `#fff`;
    } else if (props.color === "green") {
      return `${secondaryColor}`;
    }
  }};
  font-size: ${(props) => {
    if (props.color === "white") {
      return `2rem`;
    } else if (props.color === "green") {
      return `1.3rem`;
    }
  }};
  @media (min-width: ${sm}px) {
    font-size: 3rem;
    font-size: ${(props) => {
      if (props.color === "white") {
        return `2.7rem`;
      } else if (props.color === "green") {
        return `2rem`;
      }
    }};
  }
`;

const DivContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: #fff;

  @media (min-width: ${lg}px) {
    flex-direction: row;
    align-items: center;
  }
`;

const DivType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactElement = styled.div`
  color: #fff;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.7rem;
  font-weight: 400;
  margin-left: 0.4rem;

  @media (min-width: ${sm}px) {
    font-size: 1.7rem;
  }
`;

const DivBlogLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${lg}px) {
    padding-left: 3rem;
  }
`;
const ContactInfo = styled.div`
  @media (min-width: ${lg}px) {
    padding-right: 3rem;
  }
`;

const BlogLink = styled.a`
  color: #fff;
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  padding: 1rem 1rem;
  @media (min-width: ${sm}px) {
    font-size: 2rem;
  }
`;

const PrivacyPolicy = styled.p`
  width: 100%;
  color: #fff;
  text-align: center;
  letter-spacing: 0.1rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;

  @media (min-width: ${sm}px) {
    font-size: 2rem;
  }
`;

const DivFooter = styled.div`
  width: 100%;
  color: ${secondaryColor};
  text-align: center;
  letter-spacing: 0.1rem;
  padding-top: 0.3rem;
  font-size: 1rem;
  border-top: 0.1rem solid ${secondaryColor};

  @media (min-width: ${sm}px) {
    font-size: 1.7rem;
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;
export {
  Footer,
  Heading,
  DivContact,
  DivType,
  ContactElement,
  DivBlogLink,
  ContactInfo,
  BlogLink,
  PrivacyPolicy,
  DivFooter,
};
