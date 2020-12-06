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

console.log(data.reduce((a, b) => Math.max(a, b)))