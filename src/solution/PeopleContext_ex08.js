import React, { createContext, useState, useEffect } from "react";
import { Loading } from "./Loading";
import { loadPeople } from "../utils";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
    <PeopleContext.Provider value={people}>{children}</PeopleContext.Provider>
  );
};

export const WithPeopleOrLoading = ({ children }) => (
  <PeopleContext.Consumer>
    {people => (people.length > 0 ? children(people) : <Loading />)}
  </PeopleContext.Consumer>
);
