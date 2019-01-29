import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "./Header";
import { SearchableList } from "./SearchableList_ex09";
import { Player } from "./Player_ex09";
import { Person } from "./EditablePerson";

export const App = () => {
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      <Switch>
        <Route path="/list" component={SearchableList} />
        <Route path="/player" component={Player} />
        <Route path="/person/:id" component={Person} />
        <Redirect to="/list" />
      </Switch>
    </>
  );
};
