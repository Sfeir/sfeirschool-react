export const range = (min, max) => ({
  succ: x => (x === max ? min : x + 1),
  pred: x => (x === min ? max : x - 1)
});

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
