import { connect } from "react-redux";
import { savePerson, loadPeople } from "../utils";
import {
  getPeopleLoading,
  getFilteredPeopleIds,
  getPersonById,
  getQuery,
  SetPeople,
  SetPerson,
  SetQuery
} from "./state";

export const withLoadPeople = connect(
  state => ({
    loading: getPeopleLoading(state)
  }),
  dispatch => ({
    loadPeople: () => loadPeople().then(people => dispatch(SetPeople(people)))
  })
);

export const withPersonFromPersonId = connect((state, { personId }) => ({
  person: getPersonById(state, personId)
}));

export const withPersonHandlers = connect(
  undefined,
  dispatch => ({
    onUpdate: person =>
      savePerson(person).then(person => dispatch(SetPerson(person)))
  })
);

export const withFilteredPeopleIds = connect(
  state => ({
    people: getFilteredPeopleIds(state),
    query: getQuery(state)
  }),
  dispatch => ({
    setQuery: query => dispatch(SetQuery(query))
  })
);

// implement this connect hoc
// it shoud provide the "triptych" property
// with the three personIds corresponding to
// the previous, the current and the next person
// provide also onPrev and onNext event handlers
export const withPeopleTriptych = connect();
