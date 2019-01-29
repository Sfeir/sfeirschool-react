import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo
} from "react";
import { Loading } from "./Loading";

const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(data => {
        setPeople(data);
        setLoading(false);
      });
  }, []);

  const context = useMemo(
    () => {
      const getPersonById = id => people.find(p => p.id === id);

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

      return {
        people,
        loading,
        getPersonById,
        savePerson
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
