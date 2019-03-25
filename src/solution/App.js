import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "./Header";
import { SearchableListView } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./EditablePerson";
import { Loading } from "./Loading";

import {
  withLoadPeople,
  withPeopleIds,
  withPersonFromPersonId,
  withPersonHandlers,
  withFilteredPeopleIds
} from "./connect";

const ConnectedList = withFilteredPeopleIds(SearchableListView);
const ConnectedPlayer = withPeopleIds(Player);
const ConnectedPerson = withPersonFromPersonId(withPersonHandlers(Person));

export const App = withLoadPeople(({ loadPeople, loading }) => {
  useEffect(() => void loadPeople(), [loadPeople]);
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
          <Route
            path="/person/:id"
            render={({ match }) => (
              <ConnectedPerson personId={match.params.id} />
            )}
          />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
});
