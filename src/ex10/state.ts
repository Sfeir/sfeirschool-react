import { Reducer } from "redux";

export type State = {};

export type Action = { type: "SET_PEOPLE" } | { type: "SET_PERSON" };

const initialState = {};

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_PEOPLE":
    case "SET_PERSON":
    default:
      return state;
  }
};
