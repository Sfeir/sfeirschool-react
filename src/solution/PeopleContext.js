import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo
} from "react";
import { Loading } from "./Loading";
import { loadPeople, savePerson } from "../utils";

const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople().then(data => {
      setPeople(data);
      setLoading(false);
    });
  }, []);

  const context = useMemo(
    () => {
      const getPersonById = id => people.find(p => p.id === id);

      const updatePerson = person => {
        return savePerson(person).then(person =>
          setPeople(people.map(p => (p.id === person.id ? person : p)))
        );
      };

      return {
        people,
        loading,
        getPersonById,
        updatePerson
      };
    },
    [people, loading]
  );

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);

export const withPeopleOrLoading = Component => () => {
  const { people, loading } = usePeople();
  return loading ? <Loading /> : <Component people={people} />;
};
