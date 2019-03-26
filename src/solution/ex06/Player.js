import React, { useState, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../../utils";
import { PersonCard } from "../PersonCard";
import { Carousel } from "../Carousel";

export const Player = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pred, succ } = range(0, people.length - 1);

  const onNext = () => setCurrentIndex(succ);
  const onPrev = () => setCurrentIndex(pred);
  const troika = [pred(currentIndex), currentIndex, succ(currentIndex)].map(
    i => people[i]
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlaying = () => {
    !isPlaying && onNext();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const timerId = setTimeout(onNext, 1000);
      return () => clearTimeout(timerId);
    }
  });

  return (
    <>
      <main>
        <Carousel onNext={onNext} onPrev={onPrev}>
          {troika.map(person => (
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
