import React, {
  useRef,
  forwardRef,
  useState,
  useImperativeHandle
} from "react";
import { Fab } from "@rmwc/fab";
import { cycleNext, cyclePrev } from "../utils";
import { PersonCard } from "./PersonCard";

const Carousel = forwardRef(({ children }, ref) => {
  const childArray = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = cycleNext(0, childArray.length - 1);
  const prevIndex = cyclePrev(0, childArray.length - 1);

  useImperativeHandle(ref, () => ({
    next: () => setCurrentIndex(nextIndex)
  }));

  return (
    <div className="flex-row">
      <Fab
        icon="skip_previous"
        mini
        onClick={() => setCurrentIndex(prevIndex)}
      />
      {childArray[currentIndex]}
      <Fab icon="skip_next" mini onClick={() => setCurrentIndex(nextIndex)} />
    </div>
  );
});

export const Player = ({ people }) => {
  const carousel = useRef();
  const showNext = () => {
    carousel.current.next();
  };

  return (
    <>
      <main>
        <Carousel ref={carousel}>
          {people.map(person => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab icon="play_arrow" onClick={showNext} />
      </footer>
    </>
  );
};
