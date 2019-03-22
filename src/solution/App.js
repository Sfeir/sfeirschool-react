import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "./Header";
import { withPeopleOrLoading, usePeople } from "./PeopleContext";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./EditablePerson";
import { Loading } from "./Loading";

const WrappedList = withPeopleOrLoading(SearchableList);
const WrappedPlayer = withPeopleOrLoading(Player);

const WrappedPerson = ({ match }) => {
  const { loading, getPersonById, updatePerson } = usePeople();
  const person = getPersonById(match.params.id);
  return loading ? (
    <Loading />
  ) : (
    <Person person={person} onUpdate={updatePerson} />
  );
};

export const App = () => {
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      <Switch>
        <Route path="/list" component={WrappedList} />
        <Route path="/player" component={WrappedPlayer} />
        <Route path="/person/:id" component={WrappedPerson} />
        <Redirect to="/list" />
      </Switch>
    </>
  );
};
