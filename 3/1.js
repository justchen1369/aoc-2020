const fs = require('fs');

const input = fs.readFileSync('input', 'utf8');

const data = input.split('\n').map(element => element.split(''));

function getIndex(rows, col) {
    const length = data[0].length
    return data[rows][col % length];
}

let total = 0
let col = 0;
for (let i = 0; i < data.length; i++) {

    if (getIndex(i, col) === '#') {
        total++
    }

    col += 3
}

console.log(total);