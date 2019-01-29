import React from "react";

import { Header } from "../solution/Header";

import { Carousel } from "./Carousel";
// import { Carousel } from "../solution/ex03/Carousel.class";
// import { Carousel } from "../solution/ex03/Carousel.hooks";

export const App = ({ people }) => (
  <>
    <Header />
    <main>
      <Carousel people={people} />
    </main>
  </>
);
