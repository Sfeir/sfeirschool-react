import { connect } from "react-redux";
import { savePerson, loadPeople } from "../utils";
import { State, Action } from "./state";
import { Dispatch } from "redux";

// provide people from state
export const withPeople = connect((state: State) => ({}));

// provide loading from state
// and the loadPeople function dispatching SET_PEOPLE
export const withLoading = connect(
  (state: State) => ({}),
  (dispatch: Dispatch<Action>) => ({})
);

// provide person from state using useSelector
export const usePerson = (id: string) => null;

// and the onUpdate callback dispatching SET_PERSON using useDispatch
export const useUpdatePerson = () => (person: Person) => Promise.reject();
