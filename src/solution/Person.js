import React from "react";
import { usePeople } from "./PeopleContext";
import { PersonCard } from "./PersonCard";

export const Person = ({ match }) => {
  const people = usePeople();
  const person = people.find(p => p.id === match.params.id);
  return (
    <main>
      {person ? (
        <PersonCard person={person} />
      ) : (
        `404 - no person with id ${match.params.id}`
      )}
    </main>
  );
};
