import React from "react";
import { PersonCard } from "./PersonCard";

export const Person = ({ person }) => {
  return (
    <main>
      {person ? <PersonCard person={person} /> : `404 - no person with this id`}
    </main>
  );
};
