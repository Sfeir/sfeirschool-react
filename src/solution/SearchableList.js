import React, { useState, useLayoutEffect } from "react";
import { TextField } from "@rmwc/textfield";

import { toPersonCard } from "./PersonCard";

const nameContains = query => {
  const re = new RegExp(query, "i");
  return p => re.test(p.firstname) || re.test(p.lastname);
};

export const SearchableList = ({ people }) => {
  const [query, setQuery] = useState("");
  const filteredPeople = people.filter(nameContains(query));
  return SearchableListView({ people: filteredPeople, query, setQuery });
};

export const SearchableListView = ({ people, currentId, query, setQuery }) => {
  useLayoutEffect(() => {
    const currentCard = document.getElementById(`p-${currentId}`);
    if (currentCard)
      currentCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [currentId]);

  return (
    <>
      <main>{people.map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{
            icon: "close",
            onClick: () => setQuery("")
          }}
          label="search by name"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </footer>
    </>
  );
};
