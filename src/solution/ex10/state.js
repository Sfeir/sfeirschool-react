const initialState = {
  people: [],
  loading: true
};

export const reducer = (state = initialState, action) => {
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
