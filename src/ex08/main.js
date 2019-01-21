import React from "react";
import { render } from "react-dom";

import { Config } from "../solution/Config";

import { PeopleProvider } from "./PeopleContext";
// import { PeopleProvider } from "../solution/PeopleContext";

import { App } from "./App";
// import { App } from "../solution/App_ex08";

render(
  <Config useRouter>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </Config>,
  document.getElementById("root")
);
