import React, { useEffect } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/EditablePerson";
import { Loading } from "../solution/Loading";

import { usePerson, useApi, usePeople, useIsReady } from "./connect";

const ConnectedList: React.FC = () => <SearchableList people={usePeople()} />;
const ConnectedPlayer: React.FC = () => <Player people={usePeople()} />;
const ConnectedPerson: React.FC<{ personId: string }> = ({ personId }) => {
  const person = usePerson(personId);
  const { updatePerson } = useApi();
  return <Person person={person} onUpdate={updatePerson} />;
};

export const App: React.FC = () => {
  const loading = !useIsReady();
  const { loadPeople: onReady } = useApi();

  useEffect(() => void onReady(), [onReady]);
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
};
