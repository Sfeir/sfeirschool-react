import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext";
import { SearchableList as Original } from "./SearchableList";

export const SearchableList = () => {
  const people = useContext(PeopleContext);
  return <Original people={people} />;
};
