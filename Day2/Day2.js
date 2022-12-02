//import data to be used. 
const fs = require('fs')
const path = require('path')
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

const parsedData = data.split(/(?:\s)\s/g);

let score = 0;
scoreRound = (opponent, player) => {
    switch (opponent) {        
        case 'A':
            switch (player) {
                case 'X': 
                    console.log('lose');
                    score += 3;                   
                    break;
                case 'Y':
                    console.log('draw');
                    score += 4;
                    break;
                case 'Z':
                    console.log('win');
                    score += 8;
                    break;
            }
            break;
        case 'B':
            switch (player) {
                case 'X': 
                    console.log('lose');
                    score += 1;                   
                    break;
                case 'Y':
                    console.log('draw');
                    score += 5;
                    break;
                case 'Z':
                    console.log('win')
                    score += 9;
                    break;
            }
            break;
        case 'C':
            switch (player) {
                case 'X': 
                    console.log('lose'); 
                    score += 2;                   
                    break;
                case 'Y':
                    console.log('draw');
                    score += 6;
                    break;
                case 'Z':
                    console.log('win');
                    score += 7;
                    break;
            }
            break;
    }

};

parsedData.forEach(round => {
    scoreRound(round[0],round[2]);
})

console.log(score);