import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { Config } from "../solution/Config";
import { App } from "./App";

import { store } from "./store";
import { loadPeople } from "../utils";

render(
  <Config useRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </Config>,
  document.getElementById("root")
);

loadPeople().then(people => store.dispatch({ type: "SET_PEOPLE", people }));
