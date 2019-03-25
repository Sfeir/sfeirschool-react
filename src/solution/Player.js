import React, { useState, useCallback } from "react";
import { Fab } from "@rmwc/fab";
import { useScheduler } from "./hooks";
import { Carousel } from "./Carousel";
import { toPersonCard } from "./PersonCard";

export const Player = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextPerson = useCallback(() => setCurrentIndex(i => i + 1), []);
  const { running, toggleRunning } = useScheduler(showNextPerson, 1000);

  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} onChange={setCurrentIndex}>
          {people.map(toPersonCard)}
        </Carousel>
      </main>
      <footer>
        <Fab icon={running ? "pause" : "play_arrow"} onClick={toggleRunning} />
      </footer>
    </>
  );
};
