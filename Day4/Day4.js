const fs = require('fs');
const path = require('path')
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

const parsedData = data.split(/(?:\s)\s/g);

//final output
let containedRanges = 0;
let overlapCount = 0;

determineRange = (input) => {
    const splitInput = input.split(',');

    let output = [];

    splitInput.forEach(result => {
        const tempNum = result.split('-');

        output.push(parseInt(tempNum[0]));
        output.push(parseInt(tempNum[1]));
    });

    return output;   
}

processRanges = (numArray) => {
    let count = 0;

    if(numArray[0] >= numArray[2] && numArray[1] <= numArray[3]) {
        count++;
    } else if(numArray[2] >= numArray[0] &&  numArray[3] <= numArray[1]) {
        count++;
    }

    return count;
};

findSubset = (numArray) => {
    if(
        (numArray[0] >= numArray[2] && numArray[0] <= numArray[3]) ||
        (numArray[1] >= numArray[2] && numArray[0] <= numArray[3]) ||
        (numArray[2] >= numArray[0] && numArray[2] <= numArray[1]) ||
        (numArray[3] >= numArray[0] && numArray[3] <= numArray[1]) 
     ) {
        return true; 
    }  

    return false;
}

parsedData.forEach(pair => {
    containedRanges += processRanges(determineRange(pair));
    if(findSubset(determineRange(pair))) {
        overlapCount++
    };
})

console.log('contained ranges: ' + containedRanges);
console.log('Overlap : ' + overlapCount);