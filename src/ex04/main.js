import React from "react";
import { render } from "react-dom";
import { people } from "../../data/people.json";

import { App } from "./App";
// import { App } from "../solution/App_ex04";

render(<App people={people} />, document.getElementById("root"));
