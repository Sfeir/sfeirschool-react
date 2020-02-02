import React, { useEffect } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/EditablePerson";
import { Loading } from "../solution/Loading";

import { withLoading, withPeople, usePerson, useUpdatePerson } from "./connect";

// import {
//   withLoading,
//   withPeople,
//   usePerson,
//   useUpdatePerson
// } from "../solution/ex10/connect";

const ConnectedList: any = withPeople(SearchableList);
const ConnectedPlayer: any = withPeople(Player);

const ConnectedPerson: React.FC<{ personId: string }> = ({ personId }) => (
  <Person person={usePerson(personId)} onUpdate={useUpdatePerson()} />
);

type AppProps = {
  loadPeople?: () => any;
  loading?: boolean;
};

export const App = withLoading<React.FC<AppProps>>(
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
            <Route path="/list" render={() => <ConnectedList />} />
            <Route path="/player" render={() => <ConnectedPlayer />} />
            <Route
              path="/person/:id"
              render={({ match }: RouteComponentProps<{ id: string }>) => (
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
