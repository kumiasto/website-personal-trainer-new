import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MdClose } from "react-icons/md";

import { Nav, LiElement, UlElement, Button, A } from "./style/styledMobileMenu";

const Menu = (props) => {
  function closeMenu() {
    props.dispatch({ type: "IS_OPEN" });
    window.scrollTo(0, 0);
  }

  return (
    <Nav active={props.state.value}>
      <Button onClick={closeMenu}>
        <MdClose />
      </Button>

      <UlElement>
        <Link to="/plan-treningowy">
          <LiElement onClick={closeMenu}>Plan treningowy</LiElement>
        </Link>

        <Link to="/trening-personalny">
          <LiElement onClick={closeMenu}>Trening personalny</LiElement>
        </Link>
        <Link to="/dieta">
          <LiElement onClick={closeMenu}>Dieta</LiElement>
        </Link>
        <LiElement>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href="https://zachlorowani.pl/"
          >
            Blog
          </A>
        </LiElement>
      </UlElement>
    </Nav>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(Menu);
