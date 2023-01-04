searchDir = input => {

}

//changes current dir 
const changeDir = function (dirArray, dirName, currentDir) {
    const parsedDirName = dirName.slice(5, dirName.length)
    console.log(currentDir)
    
    switch (parsedDirName) {
        case '/':
            console.log('root');
            break;
        
        case '..': 
            console.log('up one dir');
        default:
            console.log(parsedDirName);
            break;
    }
    console.log(dirArray[1].length);    
}

module.exports = changeDir;