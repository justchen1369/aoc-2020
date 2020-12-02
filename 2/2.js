const fs = require('fs');

function validatePassword(str, char, occurrenceLocations) {

  let occurences = 0

  occurrenceLocations.forEach(occurrenceLocation => {

    if(str.charAt(occurrenceLocation - 1) === char) occurences++

  })

  return occurences === 1

}

const input = fs.readFileSync('input', 'utf8').split('\n')

input.pop();

const data = input.map(element => {
  // [ '1-2', 'w:', 'tmwqqfc' ]
  let obj = {}
  const parts = element.split(' ');

  obj.occurrenceLocations = parts[0].split('-');

  obj.character = parts[1].slice(0,1)
  obj.password = parts[2]

  return obj

})

let validPasswords = 0
for (const element of data) {
  if (validatePassword(element.password, element.character, element.occurrenceLocations)) {
    validPasswords++
  }
}

console.log(validPasswords);
