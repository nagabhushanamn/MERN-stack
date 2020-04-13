
console.log("-index.js-")


//----------------------------
// greeting by language
//----------------------------


const greet = require('intern-batch-greet')
const lodash = require('lodash')

greet('tn')


// ---------------------------------
//  array
// ---------------------------------


let data = [1, 1, 2, 3, 4, 4, 3]
let uniqueElements = lodash.uniq(data)
console.log(uniqueElements)

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 3, 4]

console.log(lodash.difference(arr1,arr2))

//----------------------------------------
