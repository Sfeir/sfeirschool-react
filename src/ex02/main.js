import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./components/App";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
  }
  a {
    color: #337ab7;
  }
`;

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
