const fs = require('fs');

const input = fs.readFileSync('input', 'utf-8');

const data = input.split('\n')
.map(element => {
    return parseInt(
        element
        .replace(/B/g, 1)
        .replace(/F/g, 0)
        .replace(/R/g, 1)
        .replace(/L/g, 0),
        2
    )
})
.sort((a, b) => a - b)

function generateSeatID(row, column) {
    return (row * 8) + column
}

for (let i = 1; i < data.length; i++) {
    if (data[i] - data[i - 1] !== 1) {
        console.log(data[i] - 1)
    }
}