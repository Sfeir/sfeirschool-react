import { useSelector, useDispatch } from "react-redux";
import {
  getQuery,
  getCurrent,
  getPersonById,
  getPeopleLoading,
  getFilteredPeople,
  getTriptych,
  Action,
  getSaving
} from "./state";
import { useMemo } from "react";
import { Dispatch } from "redux";

export const useIsLoading = () => useSelector(getPeopleLoading);
export const useQuery = () => useSelector(getQuery);
export const useCurrentId = () => useSelector(getCurrent);
export const usePerson = (id: string) => useSelector(getPersonById(id));
export const useFilteredPeople = () => useSelector(getFilteredPeople);
export const useTriptych = () => useSelector(getTriptych);
export const useSaving = () => useSelector(getSaving);

export const useStateApi = () => {
  const dispatch = useDispatch<Dispatch<Action>>();
  return useMemo(
    () => ({
      loadPeople: () => dispatch({ type: "LOAD_PEOPLE" }),
      savePerson: (person: Person) => dispatch({ type: "SAVE_PERSON", person }),
      setCurrent: (personId: string) =>
        dispatch({ type: "SET_CURRENT_PERSON", personId }),
      setNext: () => dispatch({ type: "SET_NEXT_PERSON" }),
      setPrev: () => dispatch({ type: "SET_PREV_PERSON" }),
      setQuery: (query: string) => dispatch({ type: "SET_QUERY", query })
    }),
    [dispatch]
  );
};
