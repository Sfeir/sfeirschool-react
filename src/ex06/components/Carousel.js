import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { cycleNext, cyclePrev } from "../../utils";
import { PersonCard } from "../../solution/components/PersonCard";

export function Carousel({ people }) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const next = cycleNext(0, people.length - 1);
  const prev = cyclePrev(0, people.length - 1);

  return (
    <>
      <main>
        <PersonCard person={people[currentPersonIndex]} />
      </main>
      <footer>
        <Fab
          icon="skip_previous"
          mini
          onClick={() => setCurrentPersonIndex(prev)}
        />
        <Fab
          icon="skip_next"
          mini
          onClick={() => setCurrentPersonIndex(next)}
        />
      </footer>
    </>
  );
}
