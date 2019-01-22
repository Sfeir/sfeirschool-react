import React, { createContext, useState, useEffect, useContext } from "react";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const loadPeople = () => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(setPeople);
  };

  const savePerson = person => {
    return fetch("http://localhost:3000/people/" + person.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(person)
    })
      .then(res => res.json())
      .then(person =>
        setPeople(people.map(p => (p.id === person.id ? person : p)))
      );
  };

  useEffect(loadPeople, []);

  const context = {
    people,
    getPersonById: id => people.find(p => p.id === id),
    savePerson
  };

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};

export const WithPeople = PeopleContext.Consumer;
export const usePeople = () => useContext(PeopleContext);
