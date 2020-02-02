import { connect } from "react-redux";
import { savePerson, loadPeople } from "../../utils";
import { State, Action } from "./state";
import { Dispatch } from "redux";

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

export const withPerson = connect(
  (state: State, { personId }: { personId: string }) => ({
    person: state.people && state.people.find(p => p.id === personId)
  }),
  (dispatch: Dispatch<Action>) => ({
    onUpdate: (person: Person) =>
      savePerson(person).then(person =>
        dispatch({ type: "SET_PERSON", person })
      )
  })
);
