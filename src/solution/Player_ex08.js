import React from "react";
import { WithPeople } from "./PeopleContext";
import { Player as Original } from "./Player";

export const Player = () => (
  <WithPeople>{people => <Original people={people} />}</WithPeople>
);
