import React, { useState, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { Carousel } from "../solution/Carousel";
import { PersonCard } from "../solution/PersonCard";
import { withPeopleOrLoading } from "./PeopleContext";

const useScheduler = (f, interval) => {
  const [running, setRunning] = useState(false);
  const toggleRunning = () => {
    !running && f();
    setRunning(!running);
  };
  useEffect(
    () => {
      if (running) {
        const iid = setInterval(f, interval);
        return () => clearInterval(iid);
      }
    },
    [running]
  );
  return { running, toggleRunning };
};

export const Player = withPeopleOrLoading(({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextPerson = () => setCurrentIndex(i => i + 1);
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
});
