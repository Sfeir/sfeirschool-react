import { connect } from "react-redux";
import { savePerson, loadPeople } from "../../utils";

export const withPeople = connect(state => ({
  people: state.people || []
}));

export const withLoading = connect(
  state => ({
    loading: state.people === null
  }),
  dispatch => ({
    loadPeople: () =>
      loadPeople().then(people => dispatch({ type: "SET_PEOPLE", people }))
  })
);

export const withPerson = connect(
  (state, { personId }) => ({
    person: state.people && state.people.find(p => p.id === personId)
  }),
  dispatch => ({
    onUpdate: person =>
      savePerson(person).then(person =>
        dispatch({ type: "SET_PERSON", person })
      )
  })
);
