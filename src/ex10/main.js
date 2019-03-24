import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { Config } from "../solution/Config";
import { App } from "./App";

import { store } from "./store";

render(
  <Config useRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </Config>,
  document.getElementById("root")
);
