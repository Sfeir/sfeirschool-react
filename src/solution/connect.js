import { connect } from "react-redux";

import * as st from "./state";

export const withLoadPeople = connect(
  state => ({
    loading: st.getPeopleLoading(state)
  }),
  {
    loadPeople: st.LoadPeople
  }
);

export const withPersonFromPersonId = connect((state, { personId }) => ({
  person: st.getPersonById(state, personId)
}));

export const withPersonHandlers = connect(
  undefined,
  {
    onUpdate: st.SavePerson,
    onDisplay: st.SetCurrentPerson
  }
);

export const withFilteredPeopleIds = connect(
  state => ({
    people: st.getFilteredPeopleIds(state),
    currentId: st.getCurrent(state),
    query: st.getQuery(state)
  }),
  {
    setQuery: st.SetQuery
  }
);

export const withPeopleTriptych = connect(
  state => ({
    triptych: st.getTriptych(state)
  }),
  {
    onNext: st.SetNextPerson,
    onPrev: st.SetPrevPerson
  }
);
