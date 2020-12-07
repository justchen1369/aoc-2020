const fs = require('fs');

const input = fs.readFileSync('input', 'utf8');

const graph = {}
input.split('\n').forEach(element => {
  
  const split = element.split(' bags contain ')
  
  graph[split[0]] = split[1]
    .slice(0, split[1].length - 1)
    .split(', ')
    .map(coloredBag => {
      if (coloredBag === 'no other bags') return null
      tmp = coloredBag.split(' ');
      
      return {
        number: tmp[0],
        bagColor: tmp[1] + ' ' + tmp[2]
      }
    })
})

function countBags(graph, property) {
  
  if (graph[property][0] == undefined) return 1
  
  const sum = graph[property].reduce((accmulator, bag) => {
    const bags = countBags(graph, bag.bagColor) * bag.number
    return accmulator + bags
  }, 0)
  
  return property !== 'shiny gold' ? sum + 1 : sum
}

console.log(countBags(graph, 'shiny gold'))