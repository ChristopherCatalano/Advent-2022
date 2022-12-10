// How many characters need to be processed before the first start-of-packet marker is detected?

const string = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

let [tempArray, finalArray] = [[],[]];
let partOneIndex = null;

//import 4 chars sorted as array, checks for dups
checkDups = (input) => {
    for (let i = 0; i < input.length; i++) {

        if(input[i] === input[i + 1]) { 
            tempArray = [];
            return true;
        }        
    }

    return false;
}

for (let i = 0; i < string.length; i++ ) {
    //build & sort temp array to check for dups
    tempArray.push(string[i], string[i + 1], string[i + 2], string[i + 3]);
    tempArray.sort();
    
    if(!checkDups(tempArray) && tempArray.length === 4) {
        partOneIndex = i + 4;
        break;
    }    
}

console.log(partOneIndex)