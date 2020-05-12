const readlineAsync = require('readline-async')

console.log("enter your name ?")
readlineAsync()
    .then(line => {
        console.log("hello " + line)
    })

console.log("cont..with other work..")    