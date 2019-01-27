import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./Person";

export const App = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(setPeople);
  }, []);

  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      <Switch>
        <Route path="/list" render={() => <SearchableList people={people} />} />
        <Route path="/player" render={() => <Player people={people} />} />
        <Route
          path="/person/:id"
          render={({ match }) => (
            <Person person={people.find(p => p.id === match.params.id)} />
          )}
        />
        <Redirect to="/list" />
      </Switch>
    </>
  );
};
