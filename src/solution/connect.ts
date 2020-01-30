import { connect } from "react-redux";

import * as st from "./state";

export const withLoadPeople = connect<
  { loading: boolean },
  { loadPeople: Function },
  {},
  st.State
>(
  state => ({
    loading: st.getPeopleLoading(state)
  }),
  {
    loadPeople: st.LoadPeople
  }
);

export const withPersonFromPersonId = connect(
  (state: st.State, { personId }: { personId: string }) => ({
    person: st.getPersonById(state, personId)
  })
);

export const withPersonHandlers = connect(undefined, {
  onUpdate: st.SavePerson,
  onDisplay: st.SetCurrentPerson
});

export const withFilteredPeopleIds = connect<
  {
    people: string[];
    currentId: string;
    query: string;
  },
  { setQuery: (v: string) => void },
  {},
  st.State
>(
  (state: st.State) => ({
    people: st.getFilteredPeopleIds(state),
    currentId: st.getCurrent(state),
    query: st.getQuery(state)
  }),
  {
    setQuery: st.SetQuery
  }
);

export const withPeopleTriptych = connect(
  (state: st.State) => ({
    triptych: st.getTriptych(state)
  }),
  {
    onNext: st.SetNextPerson,
    onPrev: st.SetPrevPerson
  }
);
