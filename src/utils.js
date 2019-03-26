export const range = (min, max) => ({
  succ: x => (x === max ? min : x + 1),
  pred: x => (x === min ? max : x - 1)
});

export const toRing = (xs, current) => {
  const { succ, pred } = range(0, xs.length - 1);
  const currentIndex = xs.indexOf(current);
  return currentIndex >= 0
    ? {
        prev: xs[pred(currentIndex)],
        next: xs[succ(currentIndex)]
      }
    : { prev: null, succ: null };
};

export const loadPeople = () =>
  fetch("http://localhost:3000/people").then(res => res.json());

export const savePerson = person =>
  fetch("http://localhost:3000/people/" + person.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
  }).then(res => res.json());
