import React, {
  useRef,
  forwardRef,
  useState,
  useImperativeHandle,
  cloneElement
} from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../../utils";
import { PersonCard } from "../PersonCard";

type CarouselProps = {
  children: React.ReactElement[];
};

interface CarouselApi {
  next: () => void;
}

const Carousel = forwardRef<CarouselApi, CarouselProps>(({ children }, ref) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pred, succ } = range(0, childArray.length - 1);
  const onPrev = () => setCurrentIndex(pred);
  const onNext = () => setCurrentIndex(succ);

  useImperativeHandle(ref, () => ({
    next: onNext
  }));

  const cards: [number, string][] = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"]
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={onPrev} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={onNext} />
    </div>
  );
});

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const carousel = useRef<CarouselApi>();
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
        <Fab icon="skip_next" onClick={showNext} />
      </footer>
    </>
  );
};
