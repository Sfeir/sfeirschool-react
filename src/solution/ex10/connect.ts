import { useCallback } from "react";
import { Dispatch } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";

import { savePerson, loadPeople } from "../../utils";
import { State, Action } from "./state";

export const withPeople = connect((state: State) => ({
  people: state.people || []
}));

export const withLoading = connect(
  (state: State) => ({
    loading: state.people === null
  }),
  (dispatch: Dispatch<Action>) => ({
    loadPeople: () =>
      loadPeople().then(people => dispatch({ type: "SET_PEOPLE", people }))
  })
);

export const usePerson = (id: string) => {
  return useSelector(
    (state: State) => state.people && state.people.find(p => p.id === id)
  );
};

export const useUpdatePerson = () => {
  const dispatch = useDispatch<Dispatch<Action>>();
  return useCallback(
    (person: Person) =>
      savePerson(person).then(person =>
        dispatch({ type: "SET_PERSON", person })
      ),
    [dispatch]
  );
};
