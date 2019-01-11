import React, { useState, useEffect } from "react";
import { Fab } from "@rmwc/fab";

import { PersonCard } from "./PersonCard";

const succ = (current, min, max) => (current === max ? min : current + 1);
const pred = (current, min, max) => (current === min ? max : current - 1);

const getPreviousPersonIndex = (people, currentIndex) =>
  pred(currentIndex, 0, people.length - 1);

const getNextPersonIndex = (people, currentIndex) =>
  succ(currentIndex, 0, people.length - 1);

export function Carousel({ people }) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(
    Math.floor(Math.random() * people.length)
  );
  const showPrevPerson = () => {
    setCurrentPersonIndex(getPreviousPersonIndex(people, currentPersonIndex));
  };
  const showNextPerson = () => {
    setCurrentPersonIndex(getNextPersonIndex(people, currentPersonIndex));
  };

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
