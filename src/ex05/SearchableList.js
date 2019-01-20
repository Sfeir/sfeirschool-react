import React from "react";
import { TextField, TextFieldIcon } from "@rmwc/textfield";

import { PersonCard } from "../solution/PersonCard";

// hint: to check if a string contains some substring,
// create a case insensitive regular expression
const containsSubstring = (str, sub) => {
  const re = new RegExp(sub, "i");
  return re.test(str);
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
