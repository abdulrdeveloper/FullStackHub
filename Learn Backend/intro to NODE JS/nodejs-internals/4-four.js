import fs from 'fs';

setTimeout(() => console.log('Hello from Timer'), 0);
setImmediate(() => console.log('Hello from Immediate'), 0);

fs.readFile('sample.txt', 'utf-8', function (err, data) {
  console.log(`File Reading Complete...`);

  setTimeout(() => console.log('Time 2'), 0);
  setTimeout(() => console.log('Time 3'), 0);
  setImmediate(() => console.log('Immediate 2'), 0);
});

console.log('Hello from Top Level Code');
