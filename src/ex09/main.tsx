import React from "react";
import { render } from "react-dom";

import { Config } from "../solution/Config";

import { PeopleProvider } from "./PeopleContext";
// import { PeopleProvider } from "../solution/ex09/PeopleContext";
import { App } from "./App";
// import { App } from "../solution/ex09/App";

render(
  <Config useRouter>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </Config>,
  document.getElementById("root")
);
