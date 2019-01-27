import React from "react";
import { Person as Original } from "./Person";
import { WithPeople } from "./PeopleContext_ex08";

// Wrap Original and provide required props from context
export const Person = ({ match }) => (
  <WithPeople>
    {people => <Original person={people.find(p => p.id === match.params.id)} />}
  </WithPeople>
);
