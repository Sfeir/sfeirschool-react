import { Person } from "./solution/state";

export const range = (min: number, max: number) => ({
  succ: (x: number) => (x === max ? min : x + 1),
  pred: (x: number) => (x === min ? max : x - 1)
});

export const toRing = <T>(
  xs: ReadonlyArray<T>,
  current: T
): { prev: T; next: T } => {
  const { succ, pred } = range(0, xs.length - 1);
  const currentIndex = xs.indexOf(current);
  return currentIndex >= 0
    ? {
        prev: xs[pred(currentIndex)],
        next: xs[succ(currentIndex)]
      }
    : { prev: null, next: null };
};

export const loadPeople = (): Promise<Person[]> =>
  fetch("http://localhost:3000/people").then(res => res.json());

export const savePerson = (person: Person): Promise<Person> =>
  fetch("http://localhost:3000/people/" + person.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
  }).then(res => res.json());
