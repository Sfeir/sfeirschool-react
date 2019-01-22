import React from "react";
import { render } from "react-dom";

import { Config } from "../solution/Config";
import { PeopleProvider } from "../solution/PeopleContext";

import { App } from "./App";

render(
  <Config useRouter>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </Config>,
  document.getElementById("root")
);
