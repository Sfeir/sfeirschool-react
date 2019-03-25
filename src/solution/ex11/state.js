import { createSelector } from "reselect";

const initialState = {
  people: {
    map: {},
    all: [],
    loading: true
  },
  query: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        ...state,
        people: {
          map: action.people.reduce(
            (acc, cur) => Object.assign(acc, { [cur.id]: cur }),
            {}
          ),
          all: action.people.map(p => p.id),
          loading: false
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

export const getPeopleIds = state => state.people.all;
export const getPeopleMap = state => state.people.map;
export const getPeopleLoading = state => state.people.loading;

export const getQuery = state => state.query;

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

export const SetPeople = people => ({ type: "SET_PEOPLE", people });
export const SetPerson = person => ({ type: "SET_PERSON", person });
export const SetQuery = query => ({ type: "SET_QUERY", query });
