import { useSelector, useDispatch } from "react-redux";
import { savePerson, loadPeople } from "../utils";
import { Action, getPeople, getIsReady, getPerson } from "./state";
import { Dispatch } from "redux";
import { useMemo } from "react";

export const usePeople = () => useSelector(getPeople);
export const useIsReady = () => useSelector(getIsReady);
export const usePerson = (id: string) => useSelector(getPerson(id));

// and the onUpdate callback dispatching SET_PERSON using useDispatch
export const useApi = () => {
  const dispatch = useDispatch<Dispatch<Action>>();
  return useMemo(
    () => ({
      loadPeople: () =>
        loadPeople().then(people => dispatch({ type: "SET_PEOPLE", people })),

      updatePerson: (person: Person) =>
        savePerson(person).then(person =>
          dispatch({ type: "SET_PERSON", person })
        )
    }),
    [dispatch]
  );
};
