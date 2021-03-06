import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { loadPeople } from "../utils";

import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/Person";

export const App = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {people.length === 0 ? (
        <Loading />
      ) : (
        <Switch>
          <Route
            path="/list"
            render={() => <SearchableList people={people} />}
          />
          <Route path="/player" render={() => <Player people={people} />} />
          <Route
            path="/person/:id"
            render={({ match }) => (
              <Person person={people.find(p => p.id === match.params.id)} />
            )}
          />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
