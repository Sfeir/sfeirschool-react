import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo
} from "react";

import { loadPeople, savePerson } from "../../utils";

type PeopleContext = {
  people: People;
  loading: boolean;
  getPersonById: (id: string) => Person | undefined;
  updatePerson: (person: Person) => Promise<void>;
};

const PeopleContext = createContext<PeopleContext>({
  people: [],
  loading: true,
  getPersonById: () => undefined,
  updatePerson: () => undefined
});

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People | null>(null);

  useEffect(() => {
    loadPeople().then(data => {
      setPeople(data);
    });
  }, []);

  const context = useMemo(
    () =>
      ({
        people: people || [],
        loading: people === null,
        getPersonById: id => people.find(p => p.id === id),
        updatePerson: person =>
          savePerson(person).then(person =>
            setPeople(people.map(p => (p.id === person.id ? person : p)))
          )
      } as PeopleContext),
    [people]
  );

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);

export function withPeople<P = {}>(
  Component: React.FC<P & { people: People }>
) {
  return (props => {
    const { people } = usePeople();
    return <Component {...props} people={people} />;
  }) as React.FC<P>;
}
