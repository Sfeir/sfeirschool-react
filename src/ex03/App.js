import React from "react";

import { people } from "../../data/people.json";
import { Header } from "../solution/Header";

import { PersonCarousel } from "./PersonCarousel";
// import { PersonCarousel } from "../solution/PersonCarousel";

export const App = () => (
  <>
    <Header />
    <main>
      <PersonCarousel people={people} />
    </main>
  </>
);
