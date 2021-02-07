import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import GlobalStyle from "./components/style/globalStyle";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
const store = createStore(reducer);

AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  root
);
