import React from "react";
import { Link } from "react-router-dom";
import { ElementDiv, DesktopDiv } from "./style/styledDesktopMenu";

const DesktopMenu = () => {
  const linkStyle = {
    color: "#fff",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <DesktopDiv>
      <ElementDiv>
        <Link to="/plan-treningowy" style={linkStyle}>
          Plan treningowy
        </Link>
      </ElementDiv>
      <ElementDiv>
        <Link to="/trening-personalny" style={linkStyle}>
          Trening personalny
        </Link>
      </ElementDiv>
      <ElementDiv>
        <Link to="/dieta" style={linkStyle}>
          Dieta
        </Link>
      </ElementDiv>
    </DesktopDiv>
  );
};

export default DesktopMenu;
