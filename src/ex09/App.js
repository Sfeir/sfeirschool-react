import React from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "../solution/Header";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./Person";

const RouteActionItem = ({ to, children }) => (
  <Route path={to}>
    {({ history, match }) => (
      <TopAppBarActionItem onClick={() => !match && history.push(to)}>
        {children}
      </TopAppBarActionItem>
    )}
  </Route>
);

export const App = () => {
  return (
    <>
      <Header>
        <RouteActionItem to="/player">view_carousel</RouteActionItem>
        <RouteActionItem to="/list">view_module</RouteActionItem>
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
