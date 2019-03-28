const initialState = {
  people: {
    map: {},
    all: null
  },
  query: ""
};

// change the reducer so it produces state values
// corresponding to the initial state structure

// people.map is a plain javascript object used
// as key/value dict where key is the person id

// people.all should just contain the person ids
// in order received from the server
// or null while loading

// handle a SET_QUERY action that just sets the
// query field

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

// implement all selectors and action creators needed in ./connect

export const getPersonById = (state, personId) =>
  state.people.find(p => p.id === personId);

// ... and all the others
