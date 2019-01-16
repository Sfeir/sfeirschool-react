import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { cycleNext, cyclePrev } from "../utils";
import { PersonCard } from "./PersonCard";

export const PersonCarousel = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = cycleNext(0, people.length - 1);
  const prev = cyclePrev(0, people.length - 1);

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setCurrentIndex(prev)} />
      <PersonCard person={people[currentIndex]} />
      <Fab icon="skip_next" mini onClick={() => setCurrentIndex(next)} />
    </div>
  );
};

///////////////////////////////////////////////////////////

const setPrevIndex = ({ currentIndex }, { people }) => ({
  currentIndex: cyclePrev(0, people.length - 1)(currentIndex)
});
const setNextIndex = ({ currentIndex }, { people }) => ({
  currentIndex: cycleNext(0, people.length - 1)(currentIndex)
});

export class PersonCarouselClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.setPrev = this.setPrev.bind(this);
    this.setNext = this.setNext.bind(this);
  }

  setPrev() {
    this.setState(setPrevIndex);
  }

  setNext() {
    this.setState(setNextIndex);
  }

  render() {
    const { people } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="flex-row">
        <Fab icon="skip_previous" mini onClick={this.setPrev} />
        <PersonCard person={people[currentIndex]} />
        <Fab icon="skip_next" mini onClick={this.setNext} />
      </div>
    );
  }
}
