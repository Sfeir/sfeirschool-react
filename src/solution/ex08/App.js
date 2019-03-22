import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header, HeaderActionItem } from "../Header";
import { SearchableList } from "../SearchableList";
import { Player } from "../Player";
import { Person } from "../Person";
import { Loading } from "../Loading";

import { PeopleContext, WithPeople } from "./PeopleContext";

const ContextualList = () => {
  const people = useContext(PeopleContext);
  return <SearchableList people={people} />;
};

const ContextualPlayer = () => <Player people={useContext(PeopleContext)} />;

const ContextualPerson = ({ match }) => (
  <WithPeople>
    {people => {
      const person = people.find(p => p.id === match.params.id);
      return <Person person={person} />;
    }}
  </WithPeople>
);

export const App = () => {
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      <WithPeople>
        {people =>
          people.length === 0 ? (
            <Loading />
          ) : (
            <Switch>
              <Route path="/list" component={ContextualList} />
              <Route path="/player" component={ContextualPlayer} />
              <Route path="/person/:id" component={ContextualPerson} />
              <Redirect to="/list" />
            </Switch>
          )
        }
      </WithPeople>
    </>
  );
};
