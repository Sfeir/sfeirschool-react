import React, { useState, cloneElement } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

const Carousel = ({ children }) => {
  const childArray = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pred, succ } = range(0, childArray.length - 1);

  const cards = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"]
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setCurrentIndex(pred)} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={() => setCurrentIndex(succ)} />
    </div>
  );
};

export const Player = ({ people }) => {
  return (
    <>
      <main>
        <Carousel>
          {people.map(person => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab icon="skip_next" />
      </footer>
    </>
  );
};
