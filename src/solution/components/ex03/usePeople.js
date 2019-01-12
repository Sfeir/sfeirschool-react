import { useState } from "react";
import { people as peopleStatic } from "../../../../data/people.json";

const shuffleArray = xs =>
  xs.reduce(
    (shuffled, x) => (
      shuffled.splice((Math.random() * (shuffled.length + 1)) | 0, 0, x),
      shuffled
    ),
    []
  );

export function usePeople() {
  const [people, setPeople] = useState(peopleStatic);
  const shuffle = () => setPeople(shuffleArray(peopleStatic));
  return { people, shuffle };
}
