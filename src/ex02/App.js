import React from "react";

import { people } from "../../data/people.json";
import { Header } from "../solution/Header";

import { PersonCardModel } from "./PersonCardModel";
import { PersonCard } from "./PersonCard";
// import { PersonCard } from "../solution/PersonCard";

const randomPerson = people[Math.floor(Math.random() * people.length)];

export const App = () => (
  <>
    <Header />
    <main>
      <PersonCard />
      <PersonCardModel />
      <pre style={{ fontSize: 12 }}>
        {JSON.stringify(randomPerson, null, 2)}
      </pre>
    </main>
  </>
);
