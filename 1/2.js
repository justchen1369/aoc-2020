const fs = require('fs');

const file = fs.readFileSync('input', 'utf8');

data = file.split('\n')
.map(element => Number(element))

for (const i of data) {
  for (const j of data) {
    for (const k of data) {
      if (i + j + k === 2020) {
        console.log(i * j * k);
      };
    }
  }
}
