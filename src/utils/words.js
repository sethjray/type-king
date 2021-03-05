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