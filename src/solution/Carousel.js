import React from "react";
import { Fab } from "@rmwc/fab";
import { cycleNext, cyclePrev } from "../utils";

export const Carousel = ({
  currentIndex = 0,
  onChange = () => {},
  children
}) => {
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
