const fs = require('fs');

const input = fs.readFileSync('input', 'utf8');

const graph = {}
input.split('\n').forEach(element => {
  
  const split = element.split(' bags contain ')
  
  graph[split[0]] = {}
  if(split[1].startsWith('no other bags')) {
    graph[split[0]] = []
    return
  }

  graph[split[0]] = split[1]
    .slice(0, split[1].length - 1)
    .split(', ')
    .map(coloredBag => {
      tmp = coloredBag.split(' ');
      
      return tmp[1] + ' ' + tmp[2]
    })
})

function search(graph, root) {

    let discoveredNodes = {}
    let queue = []

    discoveredNodes[root] = true;

    queue.push(root);

    while(queue.length !== 0) {

        const search = queue.shift();
        for (element of graph[search]) {

            if(element === 'shiny gold') return true
            if (discoveredNodes[element] !== true) {
                discoveredNodes[element] = true
    
                queue.push(element);
            }
        }
    }
}

let total = 0

for (element in graph) {
    if (search(graph, element)) total++
}
console.log(total);