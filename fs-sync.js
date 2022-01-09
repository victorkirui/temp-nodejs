//synchronous approach

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./folder/file1.txt', 'utf8');
const second = readFileSync('./folder/file2.txt', 'utf8');

console.log(first);
console.log(second);


writeFileSync('./folder/file3.txt', `${first} - ${second}`, { flag: 'a' } );
