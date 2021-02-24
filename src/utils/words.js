import faker from 'faker';
var testExerciseWords = ["This", "is", "the", "first", "exercise"];
function getWord(word) {
  return word;
}

export const generate = (count = 10) => {
  return new Array(count)
    .fill()
    .map(_ => faker.random.word())
    .join(' ')
};

// export const testExercise = (count = 5) => {
//   return new Array(count)
//     .fill()
//     .map(_ => getWord(testExerciseWords))
//     .join(' ')
// };

export const testExercise = () => {
  return "This is the first exercise, the end."
}