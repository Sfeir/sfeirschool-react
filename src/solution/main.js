import React from "react";
import { render } from "react-dom";

import { Config } from "./Config";
import { PeopleProvider } from "./PeopleContext";
import { App } from "./App";

render(
  <Config useRouter>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </Config>,
  document.getElementById("root")
);
