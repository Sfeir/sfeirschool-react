import { withPeopleOrLoading } from "./PeopleContext";
import { SearchableList as Original } from "../solution/SearchableList";

export const SearchableList = withPeopleOrLoading(Original);
