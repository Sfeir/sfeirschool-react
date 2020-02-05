import React, { useState, useEffect, useRef } from "react";
import { PersonCard } from "./PersonCard";
import { PersonForm } from "./PersonForm";
import { useStateApi, usePerson, useSaving } from "./connect";
import { useTriggerOnChange } from "./hooks";

type PersonProps = {
  person: Person;
  saving?: boolean;
  onUpdate: (p: Person) => void;
  onDisplay?: (id: string) => void;
};

export const Person: React.FC<PersonProps> = ({
  person,
  saving = false,
  onUpdate,
  onDisplay = () => {}
}) => {
  const [editing, setEditing] = useState(false);
  useEffect(() => void onDisplay(person.id), [person.id, onDisplay]);
  useTriggerOnChange(saving, true, false, () => setEditing(false));

  const card = editing ? (
    <PersonForm
      person={person}
      onReset={() => setEditing(false)}
      onSubmit={p => onUpdate(p)}
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
  const saving = useSaving();
  const { setCurrent: onDisplay, savePerson: onUpdate } = useStateApi();
  return Person({ person, saving, onUpdate, onDisplay });
};
