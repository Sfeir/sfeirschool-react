import React, { createContext, useState, useEffect } from "react";
import { loadPeople } from "../utils";

export const PeopleContext = createContext<People>([]);

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
    <PeopleContext.Provider value={people}>{children}</PeopleContext.Provider>
  );
};
