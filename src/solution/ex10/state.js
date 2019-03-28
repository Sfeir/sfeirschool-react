const initialState = {
  people: null
};

export const reducer = (state = initialState, action) => {
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
