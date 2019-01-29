import React from "react";
import { PeopleContext } from "./PeopleContext";
import { Player as Original } from "../Player";
import { Loading } from "../Loading";

export const Player = () => (
  <PeopleContext.Consumer>
    {people => (people.length > 0 ? <Original people={people} /> : <Loading />)}
  </PeopleContext.Consumer>
);
