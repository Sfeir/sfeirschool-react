import { connect } from "react-redux";
import { savePerson, loadPeople } from "../utils";
import {
  getPeopleLoading,
  getFilteredPeopleIds,
  getTriptych,
  getPersonById,
  getQuery,
  SetPeople,
  SetPerson,
  SetQuery,
  SetNextPerson,
  SetPrevPerson
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

export const withPeopleTriptych = connect(
  state => ({
    triptych: getTriptych(state)
  }),
  dispatch => ({
    onNext: () => dispatch(SetNextPerson()),
    onPrev: () => dispatch(SetPrevPerson())
  })
);
