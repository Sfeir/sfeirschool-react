import { createSelector } from "reselect";
import { RSAA, RSAAAction } from "redux-api-middleware";
import { toRing } from "../utils";

type Person = {
  id: string;
  firstname: string;
  lastname: string;
  position: string;
  phone: string;
  email: string;
  managerId: string;
  manager: string;
};

export type State = Readonly<{
  people: Readonly<{
    map: Readonly<{ [key: string]: Readonly<Person> }>;
    all: ReadonlyArray<string> | null;
  }>;
  query: string;
  current: string | null;
}>;

///////////////////////////////////////////////

export const SetQuery = (query: string) =>
  ({ type: "SET_QUERY", query } as const);

export const SetCurrentPerson = (personId: string) =>
  ({
    type: "SET_CURRENT_PERSON",
    personId
  } as const);

export const SetNextPerson = () => ({ type: "SET_NEXT_PERSON" } as const);
export const SetPrevPerson = () => ({ type: "SET_PREV_PERSON" } as const);

export const LoadPeople = (): RSAAAction<State, Person[]> => ({
  [RSAA]: {
    endpoint: "http://localhost:3000/people",
    method: "GET",
    types: ["LOAD_PEOPLE", "SET_PEOPLE", "LOAD_PEOPLE_FAILED"]
  }
});

export const SavePerson = (person: Person): RSAAAction<State, Person> => ({
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

export type Action =
  | ReturnType<typeof SetQuery>
  | ReturnType<typeof SetCurrentPerson>
  | ReturnType<typeof SetNextPerson>
  | ReturnType<typeof SetPrevPerson>
  | { type: "SET_PEOPLE"; payload: Person[] }
  | { type: "SET_PERSON"; payload: Person };

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

const onSetPeople = (
  state: State,
  { payload: people }: { payload: Person[] }
): State => {
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

const onSetPerson = (
  state: State,
  { payload: person }: { payload: Person }
): State => ({
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

export const getPersonById = (state: State, personId: string) =>
  state.people.map[personId];

export const getPeopleIds = (state: State) => state.people.all || [];

export const getPeopleMap = (state: State) => state.people.map;

export const getPeopleLoading = (state: State) => state.people.all === null;

export const getQuery = (state: State) => state.query;

export const getCurrent = (state: State) => state.current;

export const getTriptych = createSelector(
  getCurrent,
  createSelector(getPeopleIds, getCurrent, toRing),
  (curr, { next, prev }) => [prev, curr, next]
);

const nameContains = (query: string) => {
  const re = new RegExp(query, "i");
  return (p: Person): boolean => re.test(p.firstname) || re.test(p.lastname);
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
