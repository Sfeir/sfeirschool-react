import React from "react";

import { PersonCard } from "../PersonCard";

export function AllCards({ people }) {
  return (
    <main>
      {people.map(person => (
        <PersonCard person={person} key={person.id} />
      ))}
    </main>
  );
}
