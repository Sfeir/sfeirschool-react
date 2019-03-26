import React, { useState } from "react";
import { Fab } from "@rmwc/fab";
import { useScheduler } from "./hooks";
import { Carousel } from "./Carousel";
import { toPersonCard } from "./PersonCard";

export const Player = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return PlayerView({ people, currentIndex, onIndexChange: setCurrentIndex });
};

export const PlayerView = ({ people, currentIndex, onIndexChange }) => {
  const { running, toggleRunning } = useScheduler(
    () => onIndexChange(currentIndex + 1),
    1000
  );
  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} onChange={onIndexChange}>
          {people.map(toPersonCard)}
        </Carousel>
      </main>
      <footer>
        <Fab icon={running ? "pause" : "play_arrow"} onClick={toggleRunning} />
      </footer>
    </>
  );
};
