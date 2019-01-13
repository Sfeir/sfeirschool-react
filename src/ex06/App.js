import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { people } from "../../data/people.json";

import { AppBar } from "../solution/components/AppBar";
import { AllCards } from "../solution/components/ex04/AllCards";

import { Carousel } from "./components/Carousel";
// import { Carousel } from "../solution/components/Carousel";

export function App() {
  const [showAll, setShowAll] = useState(false);
  const toggle = () => setShowAll(x => !x);

  return (
    <>
      <AppBar>
        <TopAppBarActionItem onClick={toggle}>
          {showAll ? "view_carousel" : "view_module"}
        </TopAppBarActionItem>
      </AppBar>
      {showAll ? <AllCards people={people} /> : <Carousel people={people} />}
    </>
  );
}
