const fs = require('fs');

const input = fs.readFileSync('input', 'utf8');

function getIndex(rows, col) {
    const length = data[0].length
    return data[rows][col % length];
}

const data = input.split('\n').map(element => element.split(''));

const slopes = [
    {
        right: 1,
        down: 1,
    },
    {
        right: 3,
        down: 1
    },
    {
        right: 5,
        down: 1
    },
    {
        right: 7,
        down: 1
    },
    {
        right: 1,
        down: 2
    }
]

let totals = 1

for (slope of slopes) {

    let total = 0
    let col = 0;
    for (let i = 0; i < data.length; i += slope.down) {

        if (getIndex(i, col) === '#') {
            total++
        }

        col += slope.right
    }

    totals *= total
}

console.log(totals);