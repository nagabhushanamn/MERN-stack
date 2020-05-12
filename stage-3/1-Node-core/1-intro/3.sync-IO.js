const readlineSync = require('readline-sync');

let name = readlineSync.question("What is your name?");
console.log("hello " + name)


console.log("with other work...")