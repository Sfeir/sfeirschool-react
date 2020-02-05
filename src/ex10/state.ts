import { Reducer } from "redux";
import { DeepReadonly } from "utility-types";

export type State = DeepReadonly<{
  people: People | null;
}>;

export type Action =
  | { type: "SET_PEOPLE"; people: People }
  | { type: "SET_PERSON"; person: Person };

const initialState: State = {
  people: null
};

const replaceInArrayBy = <T>(eq: (v1: T, v2: T) => boolean) => (
  xs: ReadonlyArray<T>,
  v: T
): T[] => xs.map(x => (eq(x, v) ? v : x));

const replacePersonInPeople = replaceInArrayBy<Person>((x, y) => x.id === y.id);

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return { people: action.people };
    case "SET_PERSON":
      return {
        people: replacePersonInPeople(state.people, action.person)
      };
    default:
      return state;
  }
};

//////////////////

export const getPeople = (state: State) => state.people;
export const getPerson = (id: string) => (state: State) =>
  state.people.find(p => p.id === id);
export const getIsReady = (state: State) => state.people === null;
