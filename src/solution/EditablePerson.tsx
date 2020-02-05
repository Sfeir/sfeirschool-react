import React, { useState, useEffect } from "react";
import { PersonCard } from "./PersonCard";
import { PersonForm } from "./PersonForm";
import { useStateApi, usePerson } from "./connect";

type PersonProps = {
  person: Person;
  onUpdate: (p: Person) => Promise<any>;
  onDisplay?: (id: string) => void;
};

export const Person: React.FC<PersonProps> = ({
  person,
  onUpdate,
  onDisplay = () => {}
}) => {
  const [editing, setEditing] = useState(false);
  useEffect(() => void onDisplay(person.id), [person.id, onDisplay]);

  const card = editing ? (
    <PersonForm
      person={person}
      onReset={() => setEditing(false)}
      onSubmit={p => onUpdate(p).then(() => setEditing(false))}
    />
  ) : (
    <PersonCard
      person={person}
      actions={[{ label: "edit", onClick: () => setEditing(true) }]}
    />
  );

  return <main>{person ? card : "404 - this person could not be found"}</main>;
};

export const ConnectedPerson: React.FC<{ personId: string }> = ({
  personId
}) => {
  const person = usePerson(personId);
  const { setCurrent: onDisplay, savePerson: onUpdate } = useStateApi();
  return Person({ person, onUpdate, onDisplay });
};
