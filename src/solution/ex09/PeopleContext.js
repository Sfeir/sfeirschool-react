import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo
} from "react";

import { loadPeople, savePerson } from "../../utils";

const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    loadPeople().then(data => {
      setPeople(data);
    });
  }, []);

  const context = useMemo(
    () => ({
      people: people || [],
      loading: people === null,
      getPersonById: id => people.find(p => p.id === id),
      updatePerson: person =>
        savePerson(person).then(person =>
          setPeople(people.map(p => (p.id === person.id ? person : p)))
        )
    }),
    [people]
  );

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);

export const withPeople = Component => (...props) => {
  const { people } = usePeople();
  return <Component {...props} people={people} />;
};
