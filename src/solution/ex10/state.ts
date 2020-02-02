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

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        people: action.people
      };
    case "SET_PERSON":
      return {
        people: state.people.map(p =>
          p.id === action.person.id ? action.person : p
        )
      };
    default:
      return state;
  }
};
