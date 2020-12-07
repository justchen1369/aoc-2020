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
      
      return tmp[1] + ' ' + tmp[2]
    })
})

function resolveGraph(graph, property) {
  
  const obj = {}
  for (const child of graph[property]) {
    if (child == undefined) {
      return null
    } else if (child === 'shiny gold') {
      return true
    } else {
      
    obj[child] = resolveGraph(graph, child);
    }
  }
  
  return obj
}

function hasShinyBag(tree) {
  if (tree === true) return true
  for (const child in tree) {
    if (tree[child] == undefined) continue;
    if (hasShinyBag(tree[child])) return true
  }
  
  return false
}

let total = 0
for (const element in graph) {
  if (element === 'shiny gold') {
    continue;
  }
  if (hasShinyBag(resolveGraph(graph, element))) {
    total++
  }
}

console.log(total);