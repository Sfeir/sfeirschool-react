import { createSelector } from "reselect";
import { RSAA } from "redux-api-middleware";
import { toRing } from "../utils";

const initialState = (patch = {}) => ({
  people: {
    map: {},
    all: [],
    loading: true
  },
  query: "",
  current: null,
  ...patch
});

const SESSION_STORAGE_KEY = "people-state";

export const loadFromSession = () => {
  const json = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return initialState((json && JSON.parse(json)) || undefined);
};

export const saveToSession = ({ query, current }) => {
  sessionStorage.setItem(
    SESSION_STORAGE_KEY,
    JSON.stringify({ query, current })
  );
};

const onSetPeople = (state, { payload: people }) => {
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

const onSetPerson = (state, { payload: person }) => ({
  ...state,
  people: {
    ...state.people,
    map: {
      ...state.people.map,
      [person.id]: person
    }
  }
});

export const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return onSetPeople(state, action);
    case "SET_PERSON":
      return onSetPerson(state, action);
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

export const SetQuery = query => ({ type: "SET_QUERY", query });
export const SetCurrentPerson = personId => ({
  type: "SET_CURRENT_PERSON",
  personId
});
export const SetNextPerson = () => ({ type: "SET_NEXT_PERSON" });
export const SetPrevPerson = () => ({ type: "SET_PREV_PERSON" });

export const LoadPeople = () => ({
  [RSAA]: {
    endpoint: "http://localhost:3000/people",
    method: "GET",
    types: ["LOAD_PEOPLE", "SET_PEOPLE", "LOAD_PEOPLE_FAILED"]
  }
});

export const SavePerson = person => ({
  [RSAA]: {
    endpoint: `http://localhost:3000/people/${person.id}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person),
    types: ["SAVE_PERSON", "SET_PERSON", "SAVE_PERSON_FAILED"]
  }
});
