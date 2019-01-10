import React from "react";

import { people } from "../../data/people.json";

import { AppBar } from "../solution/components/AppBar";
import { Carousel } from "./components/Carousel";

export const App = () => (
  <>
    <AppBar />
    <main>
      <Carousel people={people} />
    </main>
  </>
);
