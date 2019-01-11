import React from "react";

import { PersonCard } from "../PersonCard";

export function ListAll({ people }) {
  return (
    <main>
      {people.map(person => (
        <PersonCard person={person} />
      ))}
    </main>
  );
}
