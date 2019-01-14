import React, { useState } from "react";

import { PersonCard } from "../../solution/components/PersonCard";
import { TextField } from "@rmwc/textfield";

const filterName = query => {
  const re = new RegExp(query, "i");
  return p => re.test(p.firstname) || re.test(p.lastname);
};

export function AllCards({ people }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <main>
        {people.filter(filterName(query)).map(person => (
          <PersonCard person={person} key={person.id} />
        ))}
      </main>
      <footer>
        <TextField
          withLeadingIcon="search"
          withTrailingIcon="close"
          label="search by name"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </footer>
    </>
  );
}
