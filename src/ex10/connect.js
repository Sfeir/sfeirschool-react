import { connect } from "react-redux";
import { savePerson, loadPeople } from "../utils";

// provide people from state
export const withPeople = connect();

// provide loading from state
// and the loadPeople function dispatching SET_PEOPLE
export const withLoading = connect();

// provide person from state using the personId prop
// and the onUpdate callback dispatching SET_PERSON
export const withPerson = connect();
