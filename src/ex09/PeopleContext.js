import React, { createContext, useState, useEffect } from "react";
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
