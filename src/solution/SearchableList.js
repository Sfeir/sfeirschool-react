import React, { useState } from "react";
import { TextField, TextFieldIcon } from "@rmwc/textfield";

import { PersonCard } from "./PersonCard";

const nameContains = query => {
  const re = new RegExp(query, "i");
  return p => re.test(p.firstname) || re.test(p.lastname);
};

const toPersonCard = person => <PersonCard person={person} key={person.id} />;

export const SearchableList = ({ people }) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <main>{people.filter(nameContains(query)).map(toPersonCard)}</main>
      <footer>
        <TextField
          withLeadingIcon="search"
          withTrailingIcon={
            <TextFieldIcon
              tabIndex="0"
              icon="close"
              onClick={() => setQuery("")}
            />
          }
          label="search by name"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </footer>
    </>
  );
};
