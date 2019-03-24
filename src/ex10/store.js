import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const initialState = {
  people: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        ...state,
        people: action.people,
        loading: false
      };
    case "SET_PERSON":
      return {
        ...state,
        people: state.people.map(p =>
          p.id === action.person.id ? action.person : p
        )
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, devToolsEnhancer());
