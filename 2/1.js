const fs = require('fs');

function getOccurences(str, substr) {
  return str.split(substr).length - 1
}

const input = fs.readFileSync('input', 'utf8').split('\n')

const data = input.map(element => {
  // [ '1-2', 'w:', 'tmwqqfc' ]
  let obj = {}
  const parts = element.split(' ');

  const occurrencesAllowed = parts[0].split('-');

  obj.minOccurrences = occurrencesAllowed[0]
  obj.maxOccurrences = occurrencesAllowed[1]

  obj.character = parts[1].slice(0,1)
  obj.password = parts[2]

  return obj

})

let validPasswords = 0
for (const element of data) {
  const occurrences = getOccurences(element.password, element.character);

  if (occurrences >= element.minOccurrences && occurrences <= element.maxOccurrences) {
    validPasswords++
  }
}

console.log(validPasswords);
