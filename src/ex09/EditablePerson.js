import React, { useState } from "react";
import { PersonCard } from "../solution/PersonCard";
import { CardActions, CardAction } from "../solution/Card";

import { WithPeopleOrLoading } from "./PeopleContext";
import { PersonForm } from "./PersonForm";

export const Person = ({ match }) => {
  const [editing, setEditing] = useState(false);

  return (
    <WithPeopleOrLoading>
      {people => {
        const person = people.find(p => p.id === match.params.id);

        const card = editing ? (
          <PersonForm person={person} />
        ) : (
          <PersonCard person={person}>
            <CardActions>
              <CardAction onClick={() => setEditing(true)}>edit</CardAction>
            </CardActions>
          </PersonCard>
        );

        return (
          <main>
            {person ? card : `404 - no person with id ${match.params.id}`}
          </main>
        );
      }}
    </WithPeopleOrLoading>
  );
};
