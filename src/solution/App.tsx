import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "./Header";
import { SearchableListView } from "./SearchableList";
import { PlayerView } from "./Player";
import { Person } from "./EditablePerson";
import { Loading } from "./Loading";

import {
  withLoadPeople,
  withPersonFromPersonId,
  withPersonHandlers,
  withFilteredPeopleIds,
  withPeopleTriptych
} from "./connect";

const ConnectedList = withFilteredPeopleIds(SearchableListView);
const ConnectedPlayer = withPeopleTriptych(PlayerView);
const ConnectedPerson = withPersonFromPersonId(
  withPersonHandlers(Person as any)
);

const AppView: React.FC<{
  loading: boolean;
  loadPeople: () => void;
}> = ({ loadPeople, loading }) => {
  useEffect(loadPeople, [loadPeople]);
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
};

export const App = withLoadPeople(AppView);
