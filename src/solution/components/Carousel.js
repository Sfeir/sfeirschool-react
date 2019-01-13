import React, { useState, useEffect } from "react";
import { Fab } from "@rmwc/fab";

import { cycleNext, cyclePrev } from "../../utils";
import { PersonCard } from "./PersonCard";

export function Carousel({ people }) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const next = cycleNext(0, people.length - 1);
  const prev = cyclePrev(0, people.length - 1);
  const showNextPerson = () => setCurrentPersonIndex(next);
  const showPrevPerson = () => setCurrentPersonIndex(prev);

  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlaying = () => {
    !isPlaying && showNextPerson();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const timerId = setTimeout(showNextPerson, 2000);
      return () => clearTimeout(timerId);
    }
  });

  return (
    <>
      <main>
        <PersonCard person={people[currentPersonIndex]} />
      </main>
      <footer>
        <Fab icon="skip_previous" mini onClick={showPrevPerson} />
        <Fab
          icon={isPlaying ? "pause" : "play_arrow"}
          onClick={togglePlaying}
        />
        <Fab icon="skip_next" mini onClick={showNextPerson} />
      </footer>
    </>
  );
}
