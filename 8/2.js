const fs = require('fs');

const input = fs.readFileSync('input', 'utf8').split('\n')

const data = input.map(element => element.split(' '))


function flipNopJmp(arr) {
    if (arr[0] === 'nop') {
        arr[0] = 'jmp'
    } else if (arr[0] === 'jmp') {
        arr[0] = 'nop'
    }

    return arr
}


breakout:
for (let i = 0; i < data.length; i++) {
    let acc = 0
    let visitedIndices = []
    data[i] = flipNopJmp(data[i]);

    for (let j = 0; j < data.length + 1; j++) {
        if (data[j] == undefined) {
            console.log(acc)
            break breakout;
        }
        const instruction = data[j][0]
        const num = data[j][1]

        if (visitedIndices[j] === true) {
            break;
        } else {
            visitedIndices[j] = true
        }
        if (instruction === 'acc') {
            acc += Number(num);
        } else if (instruction === 'jmp') {
            j += Number(num) - 1
        }

    }

    data[i] = flipNopJmp(data[i]);
}