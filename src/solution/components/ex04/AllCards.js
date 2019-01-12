import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { PersonCard } from "../PersonCard";
import { shuffleArray } from "../../../utils";

export function AllCards({ people }) {
  const [shuffled, setShuffled] = useState(shuffleArray(people));
  const shuffle = () => setShuffled(shuffleArray);

  return (
    <>
      <main>
        {shuffled.map(person => (
          <PersonCard person={person} key={person.id} />
        ))}
      </main>
      <footer>
        <Fab icon="shuffle" onClick={shuffle} />
      </footer>
    </>
  );
}
