import { withPeopleOrLoading } from "./PeopleContext";
import { SearchableList as Original } from "./SearchableList";

export const SearchableList = withPeopleOrLoading(Original);
