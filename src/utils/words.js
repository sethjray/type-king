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
  { name: "Starting Keys", id: 1, words: "jaf klad dalls sads lads fall sall jall kall sadf jakl ;sad ;lad." },
  { name: "Home Row and Shift", id: 2, words: "hads gads hall gall Fall Jall kall'la Lads Sads Gads." },
  { name: "Upper Row", id: 3, words: "here is a teary upper word deal; There is also some High letters." },
  { name: "Lower Row", id: 4, words: "This is the fourth exercise, the end." },
  { name: "Numbers", id: 5, words: "This is the fifth exercise, the end." },
  { name: "Extensive Punctuation", id: 6, words: "This is the sixth exercise, the end." },
  { name: "Endurance Training", id: 7, words: "This is the seventh exercise, the end." },
  { name: "Common Coding Words", id: 8, words: "This is the eighth exercise, the end." },
  { name: "Dictionary Training", id: 9, words: "This is the ninth exercise, the end." },
  { name: "Lots of Latin", id: 10, words: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
];