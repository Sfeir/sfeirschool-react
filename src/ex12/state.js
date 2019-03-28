import { createSelector } from "reselect";

const initialState = {
  people: {
    map: {},
    all: null
  },
  query: "",
  current: null // this one is new
};

// manage transitions for the `current` state property
// you should define actions for SET_NEXT_PERSON and SET_PREVIOUS_PERSON
// and expose all necessary selectors to connect the Player
// (look at utils... there may be some function you could use)

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        ...state,
        people: {
          map: Object.assign({}, ...action.people.map(p => ({ [p.id]: p }))),
          all: action.people.map(p => p.id)
        }
      };
    case "SET_PERSON":
      return {
        ...state,
        people: {
          ...state.people,
          map: {
            ...state.people.map,
            [action.person.id]: action.person
          }
        }
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
};

export const getPersonById = (state, personId) => state.people.map[personId];

export const getPeopleIds = state => state.people.all || [];
export const getPeopleMap = state => state.people.map;
export const getPeopleLoading = state => state.people.all === null;

export const getQuery = state => state.query;

// this one is already done
export const getCurrent = state => state.current;
// but define another getter returning the triple
// [previous, current, next]
//

const nameContains = query => {
  const re = new RegExp(query, "i");
  return p => re.test(p.firstname) || re.test(p.lastname);
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

export const SetPeople = (people = []) => ({ type: "SET_PEOPLE", people });
export const SetPerson = person => ({ type: "SET_PERSON", person });
export const SetQuery = query => ({ type: "SET_QUERY", query });
