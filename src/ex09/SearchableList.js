import React from "react";
import { usePeople } from "./PeopleContext";
import { SearchableList as WrappedSearchableList } from "../solution/SearchableList";

export const SearchableList = () => {
  const { people } = usePeople();
  return <WrappedSearchableList people={people} />;
};
