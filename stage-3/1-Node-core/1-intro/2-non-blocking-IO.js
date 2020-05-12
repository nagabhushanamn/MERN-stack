
const fs = require('fs')


// step-1 : read VEG_MENU.txt file, display in console
console.log("--------------------------------------------------------")
console.log(process.pid + " - start reading veg-menu file")
fs.readFile('./VEG-MENU.txt', (err, data) => {
    if (err) throw err
    const vegMenu = data.toString('utf-8')
    console.log(vegMenu)
    console.log(process.pid + " - finished reading veg menu")

}) // IO - read // 6s

console.log("--------------------------------------------------------")


// step-2 : read VEG_MENU.txt file, display in console
console.log("--------------------------------------------------------")
console.log(process.pid + " - start reading non-veg-menu file")
fs.readFile('./NON-VEG-MENU.txt', (err, data) => {
    if (err) throw err
    const nonVegMenu = data.toString('utf-8')
    console.log(nonVegMenu)
    console.log(process.pid + " - finished reading non-veg menu")
}) // IO - read // 4s

console.log("--------------------------------------------------------")