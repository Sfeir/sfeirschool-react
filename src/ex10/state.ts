import { Reducer } from "redux";
import { DeepReadonly } from "utility-types";

export type State = DeepReadonly<{
  people: {
    map: { [key: string]: Person };
    all: string[] | null;
  };
}>;

export type Action =
  | { type: "SET_PEOPLE"; people: People }
  | { type: "SET_PERSON"; person: Person };

const initialState: State = {
  people: {
    map: {},
    all: null
  }
};

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        people: {
          map: Object.assign({}, ...action.people.map(p => ({ [p.id]: p }))),
          all: action.people.map(p => p.id)
        }
      };
    case "SET_PERSON":
      return {
        people: {
          ...state.people,
          map: {
            ...state.people.map,
            [action.person.id]: action.person
          }
        }
      };
    // return produce(state => state.people.map[action.person.id] = action.person)
    default:
      return state;
  }
};

//////////////////

export const getPeople = (state: State) =>
  state.people.all?.map(id => state.people.map[id]) || [];

export const getPerson = (id: string) => (state: State) => state.people.map[id];

export const getIsReady = (state: State) => state.people.all !== null;
