
const fs = require('fs')


// step-1 : read VEG_MENU.txt file, display in console
console.log("--------------------------------------------------------")
console.log(process.pid + " - start reading veg-menu file")
const vegMenu = fs.readFileSync('./VEG-MENU.txt', 'utf-8') // IO - read // 6s
console.log(vegMenu)
console.log(process.pid + " - finished reading veg menu")

console.log("--------------------------------------------------------")


// step-2 : read VEG_MENU.txt file, display in console
console.log("--------------------------------------------------------")
console.log(process.pid + " - start reading non-veg-menu file")
const nonVegMenu = fs.readFileSync('./NON-VEG-MENU.txt', 'utf-8') // IO - read // 4s
console.log(nonVegMenu)
console.log(process.pid + " - finished reading non-veg menu")
console.log("--------------------------------------------------------")




//---------------------------------------------------------------------------

