import React, { useState } from "react";
import { PersonCard } from "../solution/PersonCard";
import { CardActions, CardAction } from "../solution/Card";

import { PersonForm } from "./PersonForm";

export const Person = ({ person }) => {
  const [editing, setEditing] = useState(false);

  const card = editing ? (
    <PersonForm person={person} />
  ) : (
    <PersonCard person={person}>
      <CardActions>
        <CardAction onClick={() => setEditing(true)}>edit</CardAction>
      </CardActions>
    </PersonCard>
  );

  return <main>{person ? card : "404 - this person could not be found"}</main>;
};
