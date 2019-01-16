import React from "react";

import { PersonCard } from "../solution/PersonCard";

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

const Fab = ({ icon }) => (
  <button className="mdc-fab mdc-fab--mini">
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

export const PersonCarousel = ({ people }) => (
  <div className="flex-row">
    <Fab icon="skip_previous" />
    <PersonCard person={people[0]} />
    <Fab icon="skip_next" />
  </div>
);

// when you are done:
// replce the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
