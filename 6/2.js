const fs = require('fs');

const input = fs.readFileSync('input', 'utf8').split('\n\n')


function intersect(a, b) {

  return a.filter(Set.prototype.has, new Set(b));

  
}

const total = input.reduce((accumulator, element) => {
    const sum = element.split('\n')
      .map(answer => [...answer])
      .reduce((a, b) => intersect(a, b))
      .length
      
    return accumulator + sum
}, 0)

console.log(total)