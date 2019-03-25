import { connect } from "react-redux";
import { savePerson, loadPeople } from "../utils";

// import selectors and action creators
// they are the public API of the state
import {} from "./state";

// implement the with... HOCs
// so they work for App
// use exclusively selectors and
// action creators

// the former ones for reference:
const withPeople = connect(state => ({
  people: state.people
}));

const withLoading = connect(
  state => ({
    loading: state.loading
  }),
  dispatch => ({
    loadPeople: () =>
      loadPeople().then(people => dispatch({ type: "SET_PEOPLE", people }))
  })
);

const withPerson = connect(
  (state, { personId }) => ({
    person: state.people.find(p => p.id === personId)
  }),
  dispatch => ({
    onUpdate: person =>
      savePerson(person).then(person =>
        dispatch({ type: "SET_PERSON", person })
      )
  })
);

// the new ones to implement:

// provide props: { loading: bool, loadPeople: () => Promise<void> }
export const withLoadPeople = connect();

// provide props: { people: string[] }
export const withPeopleIds = connect();

// provide props: { person: Person | undefined }
export const withPersonFromPersonId = connect();

// provide props: { onUpdate: Person => Promise<void> }
export const withPersonHandlers = connect();

// provide props: { people: string[], query: string, setQuery: string => void }
export const withFilteredPeopleIds = connect();
