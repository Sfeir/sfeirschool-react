import { connect } from "react-redux";

import {
  getPeopleLoading,
  getFilteredPeopleIds,
  getCurrent,
  getTriptych,
  getPersonById,
  getQuery,
  SetQuery,
  SetNextPerson,
  SetPrevPerson,
  SetCurrentPerson,
  LoadPeople,
  SavePerson
} from "./state";

export const withLoadPeople = connect(
  state => ({
    loading: getPeopleLoading(state)
  }),
  dispatch => ({
    loadPeople: () => dispatch(LoadPeople())
  })
);

export const withPersonFromPersonId = connect((state, { personId }) => ({
  person: getPersonById(state, personId)
}));

export const withPersonHandlers = connect(
  undefined,
  dispatch => ({
    onUpdate: person => dispatch(SavePerson(person)),
    onDisplay: personId => dispatch(SetCurrentPerson(personId))
  })
);

export const withFilteredPeopleIds = connect(
  state => ({
    people: getFilteredPeopleIds(state),
    currentId: getCurrent(state),
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
