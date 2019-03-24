import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "./Header";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./EditablePerson";
import { Loading } from "./Loading";

import { withLoading, withPeople, withPerson } from "./connect";

const ConnectedList = withPeople(SearchableList);
const ConnectedPlayer = withPeople(Player);
const ConnectedPerson = withPerson(Person);

export const App = withLoading(({ loadPeople, loading }) => {
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
