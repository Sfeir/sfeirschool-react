import React, { createContext, useState, useEffect, useContext } from "react";
import { Loading } from "./Loading";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(setPeople);
  }, []);

  return (
    <PeopleContext.Provider value={people}>{children}</PeopleContext.Provider>
  );
};

export const WithPeople = ({ children }) => (
  <PeopleContext.Consumer>
    {people => (people.length > 0 ? children(people) : <Loading />)}
  </PeopleContext.Consumer>
);

export const usePeople = () => useContext(PeopleContext);
