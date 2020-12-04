const fs = require('fs');

const input = fs.readFileSync('input', 'utf8');

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const data = input.split('\n\n').map(element => {
  let keyValueObj = {}
  element = element.split('\n').join(' ').split(' ')
  
  for (const keyPair of element) {
    const pair = keyPair.split(':');
    
    keyValueObj[pair[0]] = pair[1]
  }
  
  return keyValueObj;
})

let num = data.filter(passport => {
  return requiredFields.every(requiredField => passport[requiredField]);
}).length

console.log(num);