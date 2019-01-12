import React from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { people } from "../../data/people.json";

import { AppBar } from "../solution/components/AppBar";
import { Carousel } from "../solution/components/ex03/Carousel";
import { AllCards } from "./components/AllCards.js";

export function App() {
  return (
    <>
      <AppBar>
        <TopAppBarActionItem>view_carousel</TopAppBarActionItem>
        {/* <TopAppBarActionItem>view_module</TopAppBarActionItem> */}
      </AppBar>
      <AllCards people={people} />
      {/* <Carousel people={people} /> */}
    </>
  );
}
