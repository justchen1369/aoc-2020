const fs = require('fs');

console.log(
  fs.readFileSync('input', 'utf8')
    .split('\n\n')
    .map(element => new Set(element.replace(/\n/g, '')).size)
    .reduce((a, b) => a + b)
)