import { connect } from "react-redux";
import { savePerson } from "../utils";

export const withPeople = connect(state => ({
  people: state.people
}));

export const withLoading = connect(state => ({
  loading: state.loading
}));

export const withPersonFromIdParam = connect(
  (state, { match }) => ({
    person: state.people.find(p => p.id === match.params.id)
  }),
  dispatch => ({
    onUpdate: person =>
      savePerson(person).then(person =>
        dispatch({ type: "SET_PERSON", person })
      )
  })
);
