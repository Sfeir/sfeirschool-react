import React, { useState, useContext } from "react";
import { PeopleContext } from "../solution/PeopleContext";
import { PersonCard } from "../solution/PersonCard";
import { PersonForm } from "./PersonForm";

import { useField } from "formik";
import { CardActions, CardAction } from "../solution/Card";

export const Person = ({ match }) => {
  const [editing, setEditing] = useState(false);
  const people = useContext(PeopleContext);
  const person = people.find(p => p.id === match.params.id);

  const actions = editing
    ? [["save", console.log], ["cancel", () => setEditing(false)]]
    : [["edit", () => setEditing(true)]];

  const card = editing ? (
    <PersonForm person={person} onReset={() => setEditing(false)} />
  ) : (
    <PersonCard person={person}>
      <CardActions>
        <CardAction onClick={() => setEditing(true)}>edit</CardAction>
      </CardActions>
    </PersonCard>
  );

  return (
    <main>{person ? card : `404 - no person with id ${match.params.id}`}</main>
  );
};
