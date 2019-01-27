import React from "react";
import { Person as Original } from "./Person_ex07";
import { WithPeople } from "./PeopleContext";

// Wrap Original and provide required props from context
export const Person = ({ match }) => (
  <WithPeople>
    {people => <Original person={people.find(p => p.id === match.params.id)} />}
  </WithPeople>
);
