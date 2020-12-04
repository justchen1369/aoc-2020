const fs = require('fs');

const input = fs.readFileSync('input', 'utf8');

const data = input.split('\n\n').map(element => {
  let keyValueObj = {}
  element = element.split('\n').join(' ').split(' ')
  
  for (const keyPair of element) {
    const pair = keyPair.split(':');
    
    keyValueObj[pair[0]] = pair[1]
  }
  
  return keyValueObj;
})

const requiredFields = [
  {
    "fieldName": "byr",
    "validate": str => {
      return Number(str) >= 1920 && Number(str) <= 2002
    }
  },
  {
    "fieldName": "iyr",
    "validate": str => {
      return Number(str) >= 2010 && Number(str) <= 2020
    }
  },
  {
    "fieldName": "eyr",
    "validate": str => {
      return Number(str) >= 2020 && Number(str) <= 2030
    }
  },
  {
    "fieldName": "hgt",
    "validate": str => {

      if (str.endsWith('cm')) {
        const height = Number(str.slice(0, 3))
        
        return height >= 150 && height <= 193
        
      } else if (str.endsWith('in')) {
        const height = Number(str.slice(0, 2))
        
        return height >= 59 && height <= 76
        
      } else {
        return false
      }
    }
  },
  {
    "fieldName": "hcl",
    "validate": str => {
      return /^#[0-9a-f]{6}$/i.test(str)
    }
  },
  {
    "fieldName": "ecl",
    "validate": str => {
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].some(color => color === str);
    }
  },
  {
    "fieldName": "pid",
    "validate": str => {
      return /^\d{9}$/.test(str);
    }
  }
]

let num = data.filter(passport => {

  return requiredFields.every(field => {
    if (passport[field.fieldName]) {
      return field.validate(passport[field.fieldName])
    } else {
      return false
    }
  })
}).length

console.log(num);