import styled from "styled-components";
import { secondaryColor } from "../../config/color";
import { sm, md, lg } from "../../config/devices-breakpoints";

const DivModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2vh;
  outline: none;
  background-color: ${secondaryColor};
`;

const CookiesText = styled.p`
  padding: 1vh 2vh;
  text-align: center;
  color: #fff;
  margin-bottom: 2vh;
  background-color: ${secondaryColor};

  @media (min-width: ${sm}px) {
    font-size: 1.7rem;
  }
  @media (min-width: ${md}px) {
    font-size: 2.1rem;
  }
  @media (min-width: ${lg}px) {
    font-size: 1.2rem;
    padding: 0 5rem;
  }
`;

const CookiesButton = styled.button`
  width: 20%;
  padding: 1vh 3vh;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: #fff;
  border: none;
  letter-spacing: 0.2rem;
  cursor: pointer;
  border-radius: 20px;
  @media (min-width: ${sm}px) {
    font-size: 1.9rem;
  }
  @media (min-width: ${md}px) {
    font-size: 1.8rem;
  }

  @media (min-width: ${lg}px) {
    font-size: 1.2rem;
    border-bottom: 5px solid ${secondaryColor};
  }
`;

export { DivModal, CookiesText, CookiesButton };
