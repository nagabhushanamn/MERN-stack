
"use strict"


console.log("-----------------------------------")
console.log('- this keyword / function-binding -')
console.log("-----------------------------------")


/**
 * 
 *  function binding
 *  -----------------
 * 
 *   ==> to execute any function by an object , 
 *       we must do binding
 * 
 *  types
 *  --------
 *  => static 
 *  => dynamic
 * 
 */

//---------------------------------------------------------------
//A. static function binding
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
// p1.sayName();


let p2 = {
    name: 'Ria',
    // sayName:sayName,
    sayName: function () {
        console.log(`my name is ${this.name}`)
    }
}
// p2.sayName()

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
// p3.sayName()
// p4.sayName()



//-------------------------------------
// cts-academy module
//-------------------------------------

function doTraining(sub, duration, location) {
    console.log(`trainer, ${this.name} : teaching ${sub} (${duration}) in ${location}`)
}

// doTraining("MERN-stack",60,'chennai') // error

//---------------------------------------------------
//way-1
// let trainer = { name: 'Nag',doTraining:doTraining }
// trainer.doTraining("MERN-stack",60,'chennai')

//way-2

// let trainer = { name: 'Nag' }
// trainer.doTraining = doTraining
// trainer.doTraining("MERN-stack",60,'chennai')
//---------------------------------------------------

//------------------------------------
// vendor module
//------------------------------------

let trainer = { name: "Nag" }
Object.preventExtensions(trainer)

//------------------------------------
// cts-class-room module
//------------------------------------

// trainer.doTraining = doTraining // error


// ---------------------------------------------------------
//B. dynamic function binding
//-----------------------------------------------------------

// A. Eager invocation
//way-1 : call
// doTraining.call(trainer, "MERN-stack", 60, 'chennai')
//way-2 : apply
// doTraining.apply(trainer, ["MERN-stack", 60, 'chennai'])

// B. Lazy invocation, ( on event )
//way-3 : bind
// let newF=doTraining.bind(trainer,'MERN-stack')
// newF(10,'chennai')
// newF(60,'bengalore')

//----------------------------------------------------------
// function binding : summary
//----------------------------------------------------------

function func() {
    console.log(this)
}

func();

let a = { name: 'A' }
a.func = func  // static function binding
a.func()

let b = { name: "B" }
Object.preventExtensions(b)
// b.func = func // error
func.call(b) // dynamic function binding

//----------------------------------------------------------
// static vs dynamic function binding
//----------------------------------------------------------

/**
 * 
 * ==> to keep function on object for-ever, ==> static
 * ==> just function by any object  ==> dynamic
 * 
 * 
 */

//  --------------------------------------------------------------










