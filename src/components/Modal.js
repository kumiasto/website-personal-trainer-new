import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { DivModal, CookiesText, CookiesButton } from "./style/styledModal";

const Modal = () => {
  const [cookies, setCookies] = useState(false);

  function CookiesAccept() {
    localStorage.setItem("cookies", true);
    const isAccept = localStorage.getItem("cookies");
    setCookies(isAccept);
  }

  return ReactDOM.createPortal(
    !cookies ? (
      <DivModal style={{ color: "red" }}>
        <CookiesText>
          Moja strona wykorzystuje ciasteczka w celu lepszego dopasowania
          treści. Więcej o wykorzystywanych przez stronę ciasteczkach możesz
          przeczytać
          <Link
            to="/polityka-prywatności"
            style={{ color: "#fff", fontWeight: "700" }}
          >
            {" "}
            tutaj
          </Link>
          . Możesz zaakeptować tę informację klikając w poniższy przycisk.
        </CookiesText>
        <CookiesButton onClick={CookiesAccept}>Akceptuję</CookiesButton>
      </DivModal>
    ) : null,
    document.getElementById("modal")
  );
};

export default Modal;
