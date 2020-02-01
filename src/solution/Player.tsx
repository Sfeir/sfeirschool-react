import React, { useState } from "react";
import { Fab } from "@rmwc/fab";
import { useScheduler } from "./hooks";
import { Carousel } from "./Carousel";
import { toPersonCard } from "./PersonCard";
import { range } from "../utils";

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pred, succ } = range(0, people.length - 1);

  const onNext = () => setCurrentIndex(succ);
  const onPrev = () => setCurrentIndex(pred);
  const triptych = [pred(currentIndex), currentIndex, succ(currentIndex)].map(
    i => people[i]
  );

  return PlayerView({ triptych, onNext, onPrev });
};

type PlayerViewProps = {
  triptych: (Person | string)[];
  onNext: () => void;
  onPrev: () => void;
};

export const PlayerView: React.FC<PlayerViewProps> = ({
  triptych = [],
  onNext = () => {},
  onPrev = () => {}
}) => {
  const { running, toggleRunning } = useScheduler(onNext, 1000);

  return (
    <>
      <main>
        <Carousel onNext={onNext} onPrev={onPrev}>
          {triptych.map(toPersonCard)}
        </Carousel>
      </main>
      <footer>
        <Fab icon={running ? "pause" : "play_arrow"} onClick={toggleRunning} />
      </footer>
    </>
  );
};
