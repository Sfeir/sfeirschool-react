export const cycleNext = (min, max) => current =>
  current === max ? min : current + 1;

export const cyclePrev = (min, max) => current =>
  current === min ? max : current - 1;

export const shuffleArray = xs =>
  xs.reduce(
    (shuffled, x) => (
      shuffled.splice((Math.random() * (shuffled.length + 1)) | 0, 0, x),
      shuffled
    ),
    []
  );
