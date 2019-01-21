import React from "react";
import { render } from "react-dom";

import { PeopleProvider } from "./PeopleContext";
import { Config } from "../solution/Config";

import { App } from "./App";
// import { App } from "../solution/App_ex06";

render(
  <Config useRouter>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </Config>,
  document.getElementById("root")
);
