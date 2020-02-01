import React from "react";
import { TextField } from "@rmwc/textfield";

import { Person } from "../solution/state";
import { PersonCard } from "../solution/PersonCard";

// hint: to check if a string contains some substring,
// create a case insensitive regular expression
const containsSubstring = (str: string, sub: string): boolean => {
  const re = new RegExp(sub, "i");
  return re.test(str);
};

const toPersonCard = (person: Person) => (
  <PersonCard person={person} key={person.id} />
);

type SearchableListProps = {
  people: Person[];
};

export const SearchableList: React.FC<SearchableListProps> = ({ people }) => {
  return (
    <>
      <main>{people.map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{ icon: "close" }}
          label="search by name"
        />
      </footer>
    </>
  );
};
