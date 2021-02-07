import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { MdMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { Button, Header, Logo } from "./style/styledHeader";
import { pageName } from "../config/text";
import { lg } from "../config/devices-breakpoints";

const Navigation = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  function showMenu() {
    if (windowWidth > lg) {
      return <DesktopMenu />;
    } else {
      return <Button onClick={openMenu}>{<MdMenu />}</Button>;
    }
  }

  function openMenu() {
    props.dispatch({ type: "IS_OPEN" });
  }

  return (
    <>
      <Header>
        <Logo>
          <Link to="/" style={{ color: "#fff" }}>
            {pageName}
          </Link>
        </Logo>
        {showMenu()}
      </Header>
      {props.state.value && <MobileMenu />}
    </>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Navigation);
