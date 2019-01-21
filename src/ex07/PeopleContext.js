import React, { createContext, useState, useEffect, useContext } from "react";

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

export const WithPeople = PeopleContext.Consumer;

export const usePeople = () => useContext(PeopleContext);
