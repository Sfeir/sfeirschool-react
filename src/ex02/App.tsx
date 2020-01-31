import React from "react";

import { Header } from "../solution/Header";

import { PersonCardModel } from "./PersonCardModel";
import { PersonCard } from "./PersonCard";
// import { PersonCard } from "../solution/PersonCard";

type AppProps = {
  people: unknown[];
};

export const App: React.FC<AppProps> = ({ people }) => {
  const randomPerson = people[Math.floor(Math.random() * people.length)];

  return (
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
};
