import { useState } from "react";

export const range = (min, max) => ({
  succ: x => (x === max ? min : x + 1),
  pred: x => (x === min ? max : x - 1)
});

export const shuffleArray = xs =>
  xs.reduce(
    (shuffled, x) => (
      shuffled.splice((Math.random() * (shuffled.length + 1)) | 0, 0, x),
      shuffled
    ),
    []
  );

export const useForceUpdate = () => {
  const [, setUpdate] = useState(false);
  return () => setUpdate(x => !x);
};
