import React, { cloneElement } from "react";
import { Fab } from "@rmwc/fab";

export const Carousel = ({
  children,
  onNext = () => {},
  onPrev = () => {}
}) => {
  const childArray = React.Children.toArray(children);

  if (childArray.length !== 3) {
    console.warn(
      `Carousel requires exactly 3 children, got ${childArray.length}`
    );
    return null;
  }

  const [prev, current, next] = childArray;
  const childrenWithClass = [
    [next, "next"],
    [current, "current"],
    [prev, "prev"]
  ].map(([child, className]) => cloneElement(child, { className }));

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={onPrev} />
      <div className="carousel">{childrenWithClass}</div>
      <Fab icon="skip_next" mini onClick={onNext} />
    </div>
  );
};
