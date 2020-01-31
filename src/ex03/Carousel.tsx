import React from "react";

import { Person } from "../solution/state";
import { PersonCard } from "../solution/PersonCard";

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
  icon: string;
};

const Fab: React.FC<FabProps> = ({ icon }) => (
  <button className="mdc-fab mdc-fab--mini">
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

type CarouselProps = {
  people: Person[];
};

export const Carousel: React.FC<CarouselProps> = ({ people }) => (
  <div className="flex-row">
    <Fab icon="skip_previous" />
    <div className="carousel">
      <PersonCard person={people[0]} className="current" />
    </div>
    <Fab icon="skip_next" />
  </div>
);

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
