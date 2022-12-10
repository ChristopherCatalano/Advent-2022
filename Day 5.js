const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

//final output
let tempString = '';

// const crates = [
//     ['do not use'],
//     ['Z', 'N'],
//     ['M', 'C', 'D'],
//     ['P']
// ]

//starting crate data
const crates = [
    ['do not use'],
    ['S', 'M', 'R', 'N', 'W', 'J', 'V', 'T'],
    ['B', 'W', 'D', 'J', 'Q', 'P', 'C', 'V'],
    ['B', 'J', 'F', 'H', 'D', 'R', 'P'],
    ['F', 'R', 'P', 'B', 'M', 'N', 'D'],
    ['H', 'V', 'R', 'P', 'T', 'B'],
    ['C', 'B', 'P', 'T'],
    ['B', 'J', 'R', 'P', 'L'],
    ['N', 'C', 'S', 'L', 'T', 'Z', 'B', 'W'],
    ['L', 'S', 'G']
];

//parse move list into new array containing only nums
const moveList = data.split(/(?:\s)\s/g)
  .map(m => m.split(' '))
  .map(([,num,, first,, second]) => [num, first, second]
  .map(i => parseInt(i)));

//function to update crate storage. accepts arguemts for the amount of items to move, crate to move from (crate 1), and a crate to move to (crate2)
updateCrates = (amount, crate1, crate2) => {
    crates[crate2].push(...crates[crate1].splice(-amount, amount));
}

//update crates based on provided move list
moveList.forEach(move => {
    updateCrates(move[0], move[1], move[2])
});

crates.forEach((crate, index) => {
    if(index !== 0) {
        tempString += crate[crate.length -1 ]; 
    }
       
});

//log final result
console.log(tempString);