const fileSystem = { "/": {} };
let currentDir = fileSystem["/"];

console.log(currentDir);
fileSystem.a = {'newobject': {}}
currentDir = fileSystem["a"];
console.log(currentDir);