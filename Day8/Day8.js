//parse local data
const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');
const parsedData = data.split(/(?:\s)\s/g);

// parsedData.forEach()


console.log(parsedData[0][0]);