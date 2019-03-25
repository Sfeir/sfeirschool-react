import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";

import { Config } from "../solution/Config";

import { App } from "./App";
import { reducer } from "./state";
// import { reducer } from "../solution/ex11/state";

const store = createStore(reducer, devToolsEnhancer());

render(
  <Config useRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </Config>,
  document.getElementById("root")
);
