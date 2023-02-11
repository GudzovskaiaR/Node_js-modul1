import { writeFile, readFile } from 'node:fs';
import { text } from './app/app.js';

writeFile('arr.txt', text, 'utf8', (err) => {
  if (err) throw err;
});
readFile('arr.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
