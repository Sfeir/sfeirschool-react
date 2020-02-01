import React from "react";
import { PersonCard } from "./PersonCard";

type PersonProps = {
  person: Person;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  return (
    <main>
      {person ? <PersonCard person={person} /> : `404 - no person with this id`}
    </main>
  );
};
