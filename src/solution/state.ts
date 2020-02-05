import { DeepReadonly } from "utility-types";
import { createSelector } from "reselect";
import { toRing, loadPeople } from "../utils";
import { Dispatch } from "redux";

export type State = DeepReadonly<{
  people: {
    map: { [key: string]: Person };
    all: string[] | null;
  };
  query: string;
  current: string | null;
}>;

export type Action =
  | { type: "LOAD_PEOPLE" }
  | { type: "SET_PEOPLE"; people: People }
  // | { type: "SAVE_PERSON"; person: Person }
  | { type: "SET_PERSON"; person: Person }
  | { type: "SET_QUERY"; query: string }
  | { type: "SET_CURRENT_PERSON"; personId: string }
  | { type: "SET_NEXT_PERSON" }
  | { type: "SET_PREV_PERSON" };

/////////////////////////////////////////////////

const initialState = (patch: Partial<State> = {}): State => ({
  people: {
    map: {},
    all: null
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

export const saveToSession = ({ query, current }: State): void => {
  sessionStorage.setItem(
    SESSION_STORAGE_KEY,
    JSON.stringify({ query, current })
  );
};

const onSetPeople = (state: State, { people }: { people: People }): State => {
  const map = Object.assign({}, ...people.map(p => ({ [p.id]: p })));
  const all = people.map(p => p.id);
  const current =
    all.length > 0
      ? all.includes(state.current)
        ? state.current
        : all[0]
      : null;

  return {
    ...state,
    people: { map, all },
    current
  };
};

const onSetPerson = (state: State, { person }: { person: Person }): State => ({
  ...state,
  people: {
    ...state.people,
    map: {
      ...state.people.map,
      [person.id]: person
    }
  }
});

export const reducer = (
  state: State = initialState(),
  action: Action
): State => {
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

export const getPersonById = (personId: string) => (state: State) =>
  state.people.map[personId];

export const getPeopleIds = (state: State) => state.people.all || [];

export const getPeopleMap = (state: State) => state.people.map;

export const getPeopleLoading = (state: State) => state.people.all === null;

export const getQuery = (state: State) => state.query;

export const getCurrent = (state: State) => state.current;

export const getTriptych = createSelector(
  getPeopleIds,
  getCurrent,
  (ids, curr) => {
    const { prev, next } = toRing(ids, curr);
    return [prev, curr, next];
  }
);

const nameContains = (query: string) => {
  const re = new RegExp(query, "i");
  return (p: Person): boolean => re.test(p.firstname) || re.test(p.lastname);
};

export const getFilteredPeople = createSelector(
  getPeopleIds,
  getPeopleMap,
  getQuery,
  (pids, dict, query) =>
    pids
      .map(pid => dict[pid])
      .filter(nameContains(query))
      .map(p => p.id)
);

//////////////////////////////////////////////

export const effectRunner = (dispatch: Dispatch<Action>) => (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "LOAD_PEOPLE":
      loadPeople().then(people => dispatch({ type: "SET_PEOPLE", people }));
      break;
  }
};
