import React from "react";

import { people } from "../../data/people.json";

import { AppBar } from "../solution/components/AppBar";
import { PersonCard } from "./components/PersonCard";

const randomPerson = people[Math.floor(Math.random() * people.length)];

export const App = () => (
  <>
    <AppBar />
    <main>
      <PersonCard />
    </main>
    <footer>
      <pre>{JSON.stringify(randomPerson, null, 2)}</pre>
    </footer>
  </>
);
