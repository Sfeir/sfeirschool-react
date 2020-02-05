import React, { useEffect } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "./Header";
import { ConnectedList } from "./SearchableList";
import { ConnectedPlayer } from "./Player";
import { ConnectedPerson } from "./EditablePerson";
import { Loading } from "./Loading";

import { useIsLoading, useStateApi } from "./connect";

type AppProps = {
  loading: boolean;
  loadPeople: () => void;
};

const AppView: React.FC<AppProps> = ({ loadPeople, loading }) => {
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
            render={({ match }: RouteComponentProps<{ id: string }>) => (
              <ConnectedPerson personId={match.params.id} />
            )}
          />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};

export const App: React.FC = () => (
  <AppView loading={useIsLoading()} loadPeople={useStateApi().loadPeople} />
);
