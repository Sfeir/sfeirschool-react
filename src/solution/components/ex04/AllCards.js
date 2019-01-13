import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { PersonCard } from "../PersonCard";
import { shuffleArray, useForceUpdate } from "../../../utils";

export function AllCards({ people }) {
  const forceUpdate = useForceUpdate();
  return (
    <>
      <main>
        {shuffleArray(people).map(person => (
          <PersonCard person={person} key={person.id} />
        ))}
      </main>
      <footer>
        <Fab icon="shuffle" onClick={forceUpdate} />
      </footer>
    </>
  );
}
