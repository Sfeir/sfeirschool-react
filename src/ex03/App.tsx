import React from "react";

import { Person } from "../solution/state";
import { Header } from "../solution/Header";

import { Carousel } from "./Carousel";
// import { Carousel } from "../solution/ex03/Carousel.class";
// import { Carousel } from "../solution/ex03/Carousel.hooks";

type AppProps = {
  people: Person[];
};

export const App: React.FC<AppProps> = ({ people }) => (
  <>
    <Header />
    <main>
      <Carousel people={people} />
    </main>
  </>
);
