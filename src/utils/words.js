import faker from 'faker';
var testExerciseWords = ["Saab", "Volvo", "BMW"];
function getWord(word) {
  return word;
}

export const generate = (count = 10) => {
  return new Array(count)
    .fill()
    .map(_ => faker.random.word())
    .join(' ')
};

export const testExercise = (count = 3) => {
  return new Array(3)
    .fill()
    .map(_ => getWord(testExerciseWords))
    .join(' ')
};