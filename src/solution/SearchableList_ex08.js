import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext";
import { SearchableList as WrappedSearchableList } from "./SearchableList";

export const SearchableList = () => {
  const people = useContext(PeopleContext);
  return <WrappedSearchableList people={people} />;
};
