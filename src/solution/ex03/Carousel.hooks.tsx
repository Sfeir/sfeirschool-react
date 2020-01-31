import React, { useState, useMemo } from "react";
import { Fab } from "@rmwc/fab";

import { Person } from "../state";
import { range } from "../../utils";
import { PersonCard } from "../PersonCard";

type CarouselProps = {
  people: Person[];
};

export const Carousel: React.FC<CarouselProps> = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [setPrev, setNext] = useMemo(() => {
    const { pred, succ } = range(0, people.length - 1);
    return [() => setCurrentIndex(pred), () => setCurrentIndex(succ)];
  }, [people, setCurrentIndex]);

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={setPrev} />
      <div className="carousel">
        <PersonCard person={people[currentIndex]} className="current" />
      </div>
      <Fab icon="skip_next" mini onClick={setNext} />
    </div>
  );
};
