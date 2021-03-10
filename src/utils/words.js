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
  { name: "Exercise 1", id: 1, words: "This is the first exercise, the end." },
  { name: "Exercise 2", id: 2, words: "This is the second exercise, the end." },
  { name: "Exercise 3", id: 3, words: "This is the third exercise, the end." },
  { name: "Exercise 4", id: 4, words: "This is the fourth exercise, the end." },
  { name: "Exercise 5", id: 5, words: "This is the fifth exercise, the end." },
  { name: "Exercise 6", id: 6, words: "This is the sixth exercise, the end." },
  { name: "Exercise 7", id: 7, words: "This is the seventh exercise, the end." },
  { name: "Exercise 8", id: 8, words: "This is the eighth exercise, the end." },
  { name: "Exercise 9", id: 9, words: "This is the ninth exercise, the end." },
  { name: "Exercise 10", id: 10, words: "This is the tenth exercise, the end." }
];