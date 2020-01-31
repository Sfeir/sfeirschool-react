import React, { useState, useLayoutEffect } from "react";
import { TextField } from "@rmwc/textfield";

import { Person } from "./state";
import { toPersonCard } from "./PersonCard";

const nameContains = (query: string) => {
  const re = new RegExp(query, "i");
  return (p: Person) => re.test(p.firstname) || re.test(p.lastname);
};

export const SearchableList: React.FC<{ people: Person[] }> = ({ people }) => {
  const [query, setQuery] = useState("");
  const filteredPeople = people.filter(nameContains(query));
  return SearchableListView({ people: filteredPeople, query, setQuery });
};

export const SearchableListView: React.FC<{
  people: any[];
  currentId?: string;
  query: string;
  setQuery: (v: string) => void;
}> = ({ people, currentId = "", query, setQuery }) => {
  useLayoutEffect(() => {
    const currentCard = currentId && document.getElementById(`p-${currentId}`);
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </footer>
    </>
  );
};