const fs = require('fs');
const { parse } = require('path');
const path = require('path')
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

const parsedData = data.split(/(?:\s)\s/g);

// final results
let prioritySum = 0;
let badgePrioritySum = 0;

// group count used for finding badges
let groupCount = 0;

//accept string input, split in two based on string length. 
splitString = (input) => {
    return (
        {
            first: input.slice(0, input.length / 2),
            second: input.slice(input.length / 2, input.length)
        }
    )
}

//returns priority based on letter provided. 
priotize = (letter) => {
    const isLower = /[a-z]/.test(letter);

    if (!isLower) {
        return letter.charCodeAt(0) - 38;
    } else {
        return letter.charCodeAt(0) - 96;
    }
}

//returns found char for badges. Requires first index of where you'd like to search
badges = (groupIndex) => {
    for (let i = 0; i < parsedData[groupIndex].length; i++) {
        const secondGroupIndex = parsedData[groupIndex + 1].indexOf(parsedData[groupIndex][i]);
        const thirdGroupIndex = parsedData[groupIndex + 2].indexOf(parsedData[groupIndex][i]);
       
        if (secondGroupIndex !== -1 && thirdGroupIndex !== -1) {
            groupCount = 3; 
            return parsedData[groupIndex][i];
        }      
    }
}


//iterate over data provided. 
parsedData.forEach((rucksack, index) => {
    const twoCompartments = splitString(rucksack);   

    //badge and group check
    while (groupCount === 0) {
        const matchedLetter = badges(index);     
        badgePrioritySum += priotize(matchedLetter);
    }

    groupCount--;

    for (let i = 0; i < twoCompartments.first.length; i++) {
        // search second string for match of char. Returning index
        const itemIndex = twoCompartments.second.indexOf(twoCompartments.first[i]);
       
        if (itemIndex !== -1) {
            prioritySum += priotize(twoCompartments.first[i]);
            break;
        }      
    }
})

console.log(prioritySum);
console.log(badgePrioritySum);