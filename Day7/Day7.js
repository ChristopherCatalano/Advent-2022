//parse local data
const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');
const parsedData = data.split(/(?:\s)\s/g);

// import util functions 
const changeDir = require('./utils/changeDir');
const createDir = require('./utils/createDir');
const createFile = require('./utils/createFile');
const calcDirSize = require('./utils/calcDirSize');
const listDir = require('./utils/listDir');

const rootDir = { '/': {} };
// let dirArray = ['/', [['a',[],{filename: 'stringname', filesize: 100}]], {filename: 'rootfile', filesize: 100}];

//used to manage what current dir location is
let currentDir = rootDir['/']


for(let i = 0; i < parsedData.length; i++) {
    if(/ls/i.test(parsedData[i])) {
        // console.log(listDir());

    } else if (/cd/i.test(parsedData[i])) {
        changeDir(dirArray, parsedData[i], i);
    }
}

console.log(currentDir);