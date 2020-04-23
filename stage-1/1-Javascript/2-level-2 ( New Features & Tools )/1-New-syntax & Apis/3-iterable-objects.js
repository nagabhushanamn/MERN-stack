

// -------------------------------------------------------------------

// let menu = [
//     "idly",
//     "vada",
//     "poori",
//     "dosa"
// ]

// let it=menu[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// -or-

// for-of loop  ( imp-note : can be used only with iterable objects)

// for(let item of menu){
//     console.log(item)
// }

//-----------------------------------------------------------------
// custom itrable object
//-----------------------------------------------------------------

let numGenerator = {
    [Symbol.iterator]: function () {
        let num = 0
        return {
            next: function () {
                console.log('next()')
                num++
                let value = num <= 10 ? num : undefined
                let done = num <= 10 ? false : true
                return { value, done }
            }
        }
    }
}

// ------------------------------------
for (let num of numGenerator) {
    console.log(num)
}
//------------------------------------

// let [num1, num2, num3,,num5] = numGenerator   // de-structuring

//------------------------------------

// let numbers = [0, ...numGenerator]   // spread operator

//-------------------------------------



/**
 *  summary:
 * 
 *  if an object act like data-structure, we can keep iteration logic within that
 *  using 'Symbol.iterator' function
 * 
 */





