import React, { useState, useEffect, useCallback } from "react";
import { Fab } from "@rmwc/fab";
import { Carousel } from "./Carousel";
import { PersonCard } from "./PersonCard";

const useScheduler = (f, interval) => {
  const [running, setRunning] = useState(false);
  const toggleRunning = () => {
    !running && f();
    setRunning(!running);
  };
  useEffect(() => {
    if (running) {
      const iid = setInterval(f, interval);
      return () => clearInterval(iid);
    }
  }, [f, interval, running]);
  return { running, toggleRunning };
};

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
