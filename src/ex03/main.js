import React from "react";
import { render } from "react-dom";
import "normalize.css/normalize.css";
import "material-components-web/dist/material-components-web.min.css";
import "./main.css";

import { App } from "./components/App";

render(<App />, document.getElementById("root"));
