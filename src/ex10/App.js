import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/EditablePerson";
import { Loading } from "../solution/Loading";

import { withLoading, withPeople, withPersonFromIdParam } from "./connect";

const ConnectedList = withPeople(SearchableList);
const ConnectedPlayer = withPeople(Player);
const ConnectedPerson = withPersonFromIdParam(Person);

export const App = withLoading(({ loading }) => {
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
          <Route path="/list" component={ConnectedList} />
          <Route path="/player" component={ConnectedPlayer} />
          <Route path="/person/:id" component={ConnectedPerson} />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
});
