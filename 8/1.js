const fs = require('fs');

const input = fs.readFileSync('input', 'utf8').split('\n')

const data = input.map(element => element.split(' '))



let acc = 0
let visitedIndices = []
for (let i = 0; i < data.length; i++) {
    const instruction = data[i][0]
    const num = data[i][1]

    if (visitedIndices[i] === true) {
        break;
    } else {
        visitedIndices[i] = true
    }
    if (instruction === 'acc') {
        acc += Number(num); 
    } else if (instruction === 'jmp') {
        i += Number(num) - 1
    }
}

console.log(acc);