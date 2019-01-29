import React from "react";
import { Person as Original } from "../Person";
import { WithPeopleOrLoading } from "./PeopleContext";

// Wrap Original and provide required props from context
export const Person = ({ match }) => (
  <WithPeopleOrLoading>
    {people => <Original person={people.find(p => p.id === match.params.id)} />}
  </WithPeopleOrLoading>
);
