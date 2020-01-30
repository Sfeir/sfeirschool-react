import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import { Provider } from "react-redux";

import { Config } from "./Config";
import { App } from "./App";
import { reducer, loadFromSession, saveToSession } from "./state";

const store = createStore(
  reducer,
  loadFromSession(),
  composeWithDevTools(applyMiddleware(thunkMiddleware, apiMiddleware))
);

store.subscribe(() => {
  saveToSession(store.getState());
});

render(
  <Config useRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </Config>,
  document.getElementById("root")
);
