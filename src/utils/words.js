import faker from 'faker';
function getWord(word) {
  return word;
}

export const generate = (count = 10) => {
  return new Array(count)
    .fill()
    .map(_ => faker.random.word())
    .join(' ')
};

export const exerciseOne = () => {
  return "This is the first exercise, the end."
}

export const exercises = [
  { name: "Exercise 1", id: 0, words: "This is the first exercise, the end." },
  { name: "Exercise 2", id: 1, words: "This is the second exercise, the end." },
  { name: "Exercise 3", id: 2, words: "This is the third exercise, the end." }
];