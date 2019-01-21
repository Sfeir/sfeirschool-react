import React from "react";
import { WithPeople } from "./PeopleContext";
import { Player as WrappedPlayer } from "../solution/Player";

export const Player = () => (
  <WithPeople>{people => <WrappedPlayer people={people} />}</WithPeople>
);
