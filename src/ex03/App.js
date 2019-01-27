import React from "react";

import { Header } from "../solution/Header";

import { PersonCarousel } from "./PersonCarousel";
// import { PersonCarousel } from "../solution/PersonCarousel";

export const App = ({ people }) => (
  <>
    <Header />
    <main>
      <PersonCarousel people={people} />
    </main>
  </>
);
