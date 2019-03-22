import React, { useState, useCallback } from "react";
import { Fab } from "@rmwc/fab";
import { useScheduler } from "./hooks";
import { Carousel } from "./Carousel";
import { PersonCard } from "./PersonCard";

export const Player = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextPerson = useCallback(() => setCurrentIndex(i => i + 1), []);
  const { running, toggleRunning } = useScheduler(showNextPerson, 1000);

  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} onChange={setCurrentIndex}>
          {people.map(person => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab icon={running ? "pause" : "play_arrow"} onClick={toggleRunning} />
      </footer>
    </>
  );
};
