import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "./Header";
import { withPeopleOrLoading } from "./PeopleContext";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./EditablePerson";

const WrappedList = withPeopleOrLoading(SearchableList);
const WrappedPlayer = withPeopleOrLoading(Player);

export const App = () => {
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      <Switch>
        <Route path="/list" component={WrappedList} />
        <Route path="/player" component={WrappedPlayer} />
        <Route path="/person/:id" component={Person} />
        <Redirect to="/list" />
      </Switch>
    </>
  );
};
