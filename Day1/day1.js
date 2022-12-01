const fs = require('fs')
const path = require('path')

//import data to be used. 
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

//parse the provided list, convert into an array of ints 
parseFoodList = (input) => {
    const elfCount = (input.match(/(?:\s)\s/g) || []).length
    const parsedData = input.split(/(?:\s)\s/g, elfCount);

    let tempArray = [];
    // procesed input array
    let processedArray = [];

    //convert each string value to num.
    parsedData.forEach(foodItem => {

        if(foodItem === '') {
            processedArray.push(tempArray);
            tempArray = [];
            return;
        }
        tempArray.push(parseInt(foodItem))      
    })

    return processedArray;
};

// take processed elf calorie array. summing and finding the top 3
findHighestElf = (elfList) => {
    let highestCalorie = [0, 0, 0];

    elfList.forEach((elf, index) => {
        const totalCalories = elf.reduce((a, b) => a + b, 0);

        if(totalCalories > highestCalorie[0]) {
            highestCalorie[2] = highestCalorie[1];
            highestCalorie[1] = highestCalorie[0];
            highestCalorie[0] = totalCalories;
        } else if(totalCalories > highestCalorie[1] && totalCalories < highestCalorie[0]) {
            highestCalorie[2] = highestCalorie[1];
            highestCalorie[1] = totalCalories;
        } else if(totalCalories > highestCalorie[2] && totalCalories < highestCalorie[1]) {
            highestCalorie[2] = totalCalories;
        } 
    })
    
    return highestCalorie;
}

//store top 3
const topThree = findHighestElf(parseFoodList(data));

//sum top 3
console.log(topThree.reduce((a, b) => a + b, 0));