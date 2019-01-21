import React from "react";
import { render } from "react-dom";

import { Config } from "../solution/Config";

import { PeopleProvider } from "./PeopleContext";
// import { PeopleProvider } from "../solution/PeopleContext";

import { App } from "./App";
// import { App } from "../solution/App_ex07";

render(
  <Config useRouter>
    <App />
  </Config>,
  document.getElementById("root")
);
