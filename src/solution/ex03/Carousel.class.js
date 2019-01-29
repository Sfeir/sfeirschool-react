import React from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../../utils";
import { PersonCard } from "../PersonCard";

const setPrevIndex = ({ currentIndex }, { people }) => ({
  currentIndex: range(0, people.length - 1).pred(currentIndex)
});
const setNextIndex = ({ currentIndex }, { people }) => ({
  currentIndex: range(0, people.length - 1).succ(currentIndex)
});

export class Carousel extends React.Component {
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
        <div className="carousel">
          <PersonCard person={people[currentIndex]} className="current" />
        </div>
        <Fab icon="skip_next" mini onClick={this.setNext} />
      </div>
    );
  }
}
