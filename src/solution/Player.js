import React, { useState, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { Carousel } from "./Carousel";
import { PersonCard } from "../solution/PersonCard";

export const Player = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextPerson = () => setCurrentIndex(currentIndex + 1);

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
        <Carousel currentIndex={currentIndex} onChange={setCurrentIndex}>
          {people.map(person => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab
          icon={isPlaying ? "pause" : "play_arrow"}
          onClick={togglePlaying}
        />
      </footer>
    </>
  );
};
