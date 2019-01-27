import React, { useContext } from "react";
import { PeopleContext } from "./PeopleContext_ex08";
import { SearchableList as Original } from "./SearchableList";
import { Loading } from "./Loading";

export const SearchableList = () => {
  const people = useContext(PeopleContext);
  return people.length > 0 ? <Original people={people} /> : <Loading />;
};
