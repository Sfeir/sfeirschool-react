import React from "react";
import { TextField, TextFieldIcon } from "@rmwc/textfield";

import { PersonCard } from "../solution/PersonCard";

const nameContains = query => {
  const re = new RegExp(query, "i");
  return p => re.test(p.firstname) || re.test(p.lastname);
};

const toPersonCard = person => <PersonCard person={person} key={person.id} />;

export const SearchableList = ({ people }) => {
  return (
    <>
      <main>{people.map(toPersonCard)}</main>
      <footer>
        <TextField
          withLeadingIcon="search"
          withTrailingIcon={<TextFieldIcon tabIndex="0" icon="close" />}
          label="search by name"
        />
      </footer>
    </>
  );
};
