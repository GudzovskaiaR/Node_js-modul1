import { Chance } from 'chance';
const arrWords = [];

const word = new Chance();
for (let i = 0; i < 10; i++) {
  arrWords.push(word.word({ length: 6 }));
}

export const text = String(arrWords);
