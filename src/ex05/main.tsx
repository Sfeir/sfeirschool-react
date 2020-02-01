import React from "react";
import { render } from "react-dom";
import { people } from "../../data/people.json";

import { App } from "./App";

render(<App people={people} />, document.getElementById("root"));
