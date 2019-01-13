import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { AppBar } from "../AppBar";
import { AllCards } from "../ex04/AllCards";

import { Carousel } from "../Carousel";

export function App() {
  const [showAll, setShowAll] = useState(true);
  const toggle = () => setShowAll(x => !x);

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(setPeople);
  }, []);

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
