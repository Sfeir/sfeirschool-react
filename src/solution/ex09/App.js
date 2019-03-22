import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "../Header";
import { withPeople, usePeople } from "./PeopleContext";
import { SearchableList } from "../SearchableList";
import { Player } from "../Player";
import { Person } from "../EditablePerson";
import { Loading } from "../Loading";

const ContextualList = withPeople(SearchableList);
const ContextualPlayer = withPeople(Player);

const ContextualPerson = ({ match }) => {
  const { getPersonById, updatePerson } = usePeople();
  const person = getPersonById(match.params.id);
  return <Person person={person} onUpdate={updatePerson} />;
};

export const App = () => {
  const { loading } = usePeople();
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/list" component={ContextualList} />
          <Route path="/player" component={ContextualPlayer} />
          <Route path="/person/:id" component={ContextualPerson} />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
