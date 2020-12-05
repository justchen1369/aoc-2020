const fs = require('fs');

const input = fs.readFileSync('input', 'utf-8');

const data = input.split('\n')
.map(element => {
    const row = parseInt(
        element.slice(0, 7)
            .replace(/B/g, 1)
            .replace(/F/g, 0),
        2
    )
    
    const column = parseInt(
        element.slice(7, element.length)
            .replace(/R/g, 1)
            .replace(/L/g, 0),
        2
    )

    return {row, column}
})
.map(element => generateSeatID(element.row, element.column))
function generateSeatID(row, column) {
    return (row * 8) + column
}

console.log(data.reduce((a, b) => Math.max(a, b)))