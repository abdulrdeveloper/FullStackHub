import fs from 'fs';
import crypto from 'crypto';

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log('Hello from Timer'), 0);
setImmediate(() => console.log('Hello from Immediate'), 0);

fs.readFile('sample.txt', 'utf-8', function (err, data) {
  console.log(`File Reading Complete...`);

  setTimeout(() => console.log('Time 2'), 0);
  setTimeout(() => console.log('Time 3'), 0);
  setImmediate(() => console.log('Immediate 2'), 0);

  crypto.pbkdf2('password', 'salt', 300000, 1024, 'sha256', () => {
    console.log('Password 1 has been hashed', Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 300000, 1024, 'sha256', () => {
    console.log('Password 2 has been hashed', Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 300000, 1024, 'sha256', () => {
    console.log('Password 3 has been hashed', Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 300000, 1024, 'sha256', () => {
    console.log('Password 4 has been hashed', Date.now() - start);
  });

  crypto.pbkdf2('password', 'salt', 300000, 1024, 'sha256', () => {
    console.log('Password 5 has been hashed', Date.now() - start);
  });
});

console.log('Hello from Top Level Code');
