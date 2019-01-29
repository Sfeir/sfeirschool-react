import React from "react";

import { WithPeopleOrLoading } from "./PeopleContext";
import { SearchableList as Original } from "../solution/SearchableList";

export const SearchableList = () => (
  <WithPeopleOrLoading>
    {people => <Original people={people} />}
  </WithPeopleOrLoading>
);
