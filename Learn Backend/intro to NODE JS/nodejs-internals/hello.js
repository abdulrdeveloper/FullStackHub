import fs from 'fs';

console.log('Hello from NodeJS');

fs.readFile('sample.txt', 'utf-8', (err, data) => {
  console.log('File reading complete');
});

setImmediate(() => console.log('Hello'));

setTimeout(
  // Timer Start karna
  () => console.log('Hello from SetInternal 1'), // Callback Function
  30 * 1000,
);

const a = 2 + 2;

console.log('a', a);
console.log('a', a);
console.log('a', a);
console.log('a', a);
console.log('a', a);
// 10 million loc (50seconds)
