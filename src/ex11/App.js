import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableListView } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/EditablePerson";
import { Loading } from "../solution/Loading";

import {
  withLoadPeople,
  withPeopleIds,
  withPersonFromPersonId,
  withPersonHandlers,
  withFilteredPeopleIds
} from "./connect";
// } from "../solution/ex11/connect";

const ConnectedList = withFilteredPeopleIds(SearchableListView);
const ConnectedPlayer = withPeopleIds(Player);
const ConnectedPerson = withPersonFromPersonId(withPersonHandlers(Person));

export const App = withLoadPeople(
  ({ loadPeople = () => {}, loading = true }) => {
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
  }
);
