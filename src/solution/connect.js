import { connect } from "react-redux";
import { savePerson, loadPeople } from "../utils";
import {
  getPeople,
  getPeopleLoading,
  getPersonById,
  SetPeople,
  SetPerson
} from "./state";

export const withPeople = connect(state => ({
  people: getPeople(state)
}));

export const withLoading = connect(
  state => ({
    loading: getPeopleLoading(state)
  }),
  dispatch => ({
    loadPeople: () => loadPeople().then(people => dispatch(SetPeople(people)))
  })
);

export const withPerson = connect(
  (state, { personId }) => ({
    person: getPersonById(state, personId)
  }),
  dispatch => ({
    onUpdate: person =>
      savePerson(person).then(person => dispatch(SetPerson(person)))
  })
);
