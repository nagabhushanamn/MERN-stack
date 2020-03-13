
"use strict"


console.log("-----------------------------------")
console.log('- this keyword / function-binding -')
console.log("-----------------------------------")



/**
 * 
 *  function binding
 *  -----------------
 * 
 *   ==> execute function by an object
 * 
 *  types
 *  --------
 *  => static 
 *  => dynamic
 * 
 */

//---------------------------------------------------------------
// static function binding
//---------------------------------------------------------------

function isEven(inp) {
    console.log(this)
    let out = inp % 2 === 0
    return out
}

// let out = isEven(10)
// console.log(out)


function sayName() {
    console.log(`im ${this.name}`)
}

// sayName() // error

let p1 = {
    name: 'Nag',
    sayName: sayName // static function binding
}
p1.sayName();


let p2 = {
    name: 'Ria',
    // sayName:sayName,
    sayName: function () {
        console.log(`my name is ${this.name}`)
    }
}
p2.sayName()

//-------------------------------------------------------
// 
//-------------------------------------------------------
class Person {
    constructor(name) {
        this.name = name
    }
    sayName() {
        console.log(`im ${this.name}`)
    }
}

let p3 = new Person("Nag")
let p4 = new Person("Ria")
p3.sayName()
p4.sayName()

//--------------------------------------------------------
// dynamic function binding
//--------------------------------------------------------