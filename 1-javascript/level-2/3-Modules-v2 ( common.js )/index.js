
console.log("-index.js-")


//----------------------------
// greeting by language
//----------------------------


const greet = require('intern-batch-greet')
const lodash=require('lodash')

greet('tn')


// ---------------------------------
//  array
// ---------------------------------


let data = [1, 1, 2, 3, 4, 4, 3]
let uniqueElements=lodash.uniq(data)
console.log(uniqueElements)


//----------------------------------------
