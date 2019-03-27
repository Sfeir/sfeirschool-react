import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";

import { Config } from "../solution/Config";

import { App } from "./App";
import { reducer } from "./state";
// import { reducer } from "../solution/state";

// configure middleware here!
// look at the documentation of redux-devtools-extension
const store = createStore(reducer, devToolsEnhancer());

// the store can be created with an explicit initial state,
// passed as second parameter to createStore.
// find a way to persist parts of the state to sessionStorage
// so you can reload the page without loosing your state

render(
  <Config useRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </Config>,
  document.getElementById("root")
);
