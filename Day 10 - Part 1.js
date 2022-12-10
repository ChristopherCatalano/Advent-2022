//parse local data
const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');
const parsedData = data.split(/(?:\s)\s/g);

let cycleCount = 0;
let cpu = 1;
let nextRegister = 20;
let signal = 0;

//manage cycle and actions
increaseCycle = () => {
    cycleCount++;
    if(cycleCount === nextRegister) {
        signal += signalStrength();
        nextRegister += 40;        
    }
}

//calc signal str
signalStrength = () => {
    return cycleCount * cpu; 
}

//determine cycle requirement 
parsedData.forEach(cmd => {    
    if(/noop/i.test(cmd)) {
        increaseCycle();
    } else if(/addx/i.test(cmd)) {
        increaseCycle();
        increaseCycle();
        cpu += parseInt(cmd.slice(4, cmd.length));
    }

})

console.log(signal);