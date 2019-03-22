import React, { useState } from "react";
import { PersonCard } from "./PersonCard";
import { CardActions, CardAction } from "./Card";
import { PersonForm } from "./PersonForm";

export const Person = ({ person, onUpdate }) => {
  const [editing, setEditing] = useState(false);

  const card = editing ? (
    <PersonForm
      person={person}
      onReset={() => setEditing(false)}
      onSubmit={p => onUpdate(p).then(() => setEditing(false))}
    />
  ) : (
    <PersonCard person={person}>
      <CardActions>
        <CardAction onClick={() => setEditing(true)}>edit</CardAction>
      </CardActions>
    </PersonCard>
  );

  return <main>{person ? card : "404 - this person could not be found"}</main>;
};
