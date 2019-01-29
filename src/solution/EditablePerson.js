import React, { useState } from "react";
import { PersonCard } from "./PersonCard";
import { CardActions, CardAction } from "./Card";
import { Loading } from "./Loading";

import { usePeople } from "./PeopleContext";
import { PersonForm } from "./PersonForm";

export const Person = ({ match }) => {
  const [editing, setEditing] = useState(false);
  const { loading, getPersonById, updatePerson } = usePeople();
  const person = getPersonById(match.params.id);

  if (loading) return <Loading />;

  const card = editing ? (
    <PersonForm
      person={person}
      onReset={() => setEditing(false)}
      onSubmit={p => updatePerson(p).then(() => setEditing(false))}
    />
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
