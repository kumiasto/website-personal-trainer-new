import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  SocialDiv,
  SocialDivElement,
  SocialMediaLink,
} from "./style/styledSocialMedia";

const SocialMedia = () => {
  return (
    <SocialDiv data-aos="fade-in">
      <SocialDivElement>
        <SocialMediaLink
          id={1} //id for style components
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/karlinski.patryk/"
        >
          <FaFacebookF />
        </SocialMediaLink>
      </SocialDivElement>

      <SocialDivElement>
        <SocialMediaLink
          id={2} //id for style components
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/karlinski.patryk/"
        >
          <FaInstagram />
        </SocialMediaLink>
      </SocialDivElement>
    </SocialDiv>
  );
};

export default SocialMedia;
