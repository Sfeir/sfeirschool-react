import React, { useState, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { cycleNext, cyclePrev } from "../utils";
import { PersonCard } from "../solution/PersonCard";

const Carousel = ({ currentIndex = 0, onChange = () => {}, children }) => {
  const childArray = React.Children.toArray(children);

  if (childArray.length === 0) {
    return null;
  }

  if (currentIndex >= childArray.length) {
    currentIndex = currentIndex % childArray.length;
    onChange(currentIndex);
  }

  const nextIndex = cycleNext(0, childArray.length - 1);
  const prevIndex = cyclePrev(0, childArray.length - 1);

  return (
    <div className="flex-row">
      <Fab
        icon="skip_previous"
        mini
        onClick={() => onChange(prevIndex(currentIndex))}
      />
      {childArray[currentIndex]}
      <Fab
        icon="skip_next"
        mini
        onClick={() => onChange(nextIndex(currentIndex))}
      />
    </div>
  );
};

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
