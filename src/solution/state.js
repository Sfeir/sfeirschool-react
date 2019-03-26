import { createSelector } from "reselect";
import { toRing } from "../utils";

const initialState = {
  people: {
    map: {},
    all: [],
    loading: true
  },
  query: "",
  current: null
};

const onSetPeople = (state, { people }) => {
  const map = people.reduce(
    (acc, cur) => Object.assign(acc, { [cur.id]: cur }),
    {}
  );
  const all = people.map(p => p.id);
  const current =
    all.length > 0
      ? all.includes(state.current)
        ? state.current
        : all[0]
      : null;

  return {
    ...state,
    people: { map, all, loading: false },
    current
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return onSetPeople(state, action);
    case "SET_PERSON":
      return {
        ...state,
        people: {
          ...state.people,
          map: {
            ...state.people.map,
            [action.person.id]: action.person
          }
        }
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.query
      };
    case "SET_CURRENT_PERSON":
      return state.people.all.includes(action.personId) &&
        state.current !== action.personId
        ? {
            ...state,
            current: action.personId
          }
        : state;
    case "SET_NEXT_PERSON":
      return {
        ...state,
        current: toRing(state.people.all, state.current).next
      };
    case "SET_PREV_PERSON":
      return {
        ...state,
        current: toRing(state.people.all, state.current).prev
      };
    default:
      return state;
  }
};

export const getPersonById = (state, personId) => state.people.map[personId];

export const getPeopleIds = state => state.people.all;
export const getPeopleMap = state => state.people.map;
export const getPeopleLoading = state => state.people.loading;

export const getQuery = state => state.query;

export const getCurrent = state => state.current;
export const getTriptych = createSelector(
  getCurrent,
  createSelector(
    getPeopleIds,
    getCurrent,
    toRing
  ),
  (curr, { next, prev }) => [prev, curr, next]
);

const nameContains = query => {
  const re = new RegExp(query, "i");
  return p => re.test(p.firstname) || re.test(p.lastname);
};

export const getFilteredPeopleIds = createSelector(
  getPeopleIds,
  getPeopleMap,
  getQuery,
  (pids, dict, query) =>
    pids
      .map(pid => dict[pid])
      .filter(nameContains(query))
      .map(p => p.id)
);

export const SetPeople = (people = []) => ({ type: "SET_PEOPLE", people });
export const SetPerson = person => ({ type: "SET_PERSON", person });
export const SetQuery = query => ({ type: "SET_QUERY", query });
export const SetCurrentPerson = personId => ({
  type: "SET_CURRENT_PERSON",
  personId
});
export const SetNextPerson = () => ({ type: "SET_NEXT_PERSON" });
export const SetPrevPerson = () => ({ type: "SET_PREV_PERSON" });
