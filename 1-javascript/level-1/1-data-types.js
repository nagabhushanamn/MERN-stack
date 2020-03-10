"use strict"


console.log("---------------------------")
console.log('-data-types-')
console.log("---------------------------")



//----------------------------------------------------------------------------------
/**
 *
 *  data types
 *
 *  1. simple/primitives  ==> values
 *
 *  a. undefined
 *  b. string
 *  c. number
 *  d. boolean
 *
 *  2. complex/reference  ==> objects
 * 
 *
 */

//----------------------------------------------------------------------------------
// 1. simple/primitives 
//----------------------------------------------------------------------------------

//-------------------------------------------------
// undefined
//-------------------------------------------------

var v;

//-------------------------------------------------
// string
//-------------------------------------------------

var name = "Nag"
var company = 'cts'

var dynamicString1 = "the trainer " + name + " teaching in " + company
var dynamicString2 = `the trainer ${name} teaching in ${company}` // string interpolation ( es6 )

var multiLineSteing1 = `
    <div>
        <h1>${name}</h1>
        <h4>${company}</h4>
    </div>
`

var resultString = `the sume of 1 and 2 is ${1 + 2}`


//-------------------------------------------------
// number
//-------------------------------------------------

var count = 12
var cost = 12.12


//-------------------------------------------------
// boolean
//-------------------------------------------------

var isFinished = false
// if (isFinished) { console.log("yes") }
// else { console.log("not yet") }

/**
 * 
 *  imp-note :
 * 
 *  falsy values :   false,"",0,undefied,null,NaN
 * 
 *  reference : https://dorey.github.io/JavaScript-Equality-Table/
 * 
 */

//-------------------------------------------------
//Q1
//-------------------------------------------------

// function getFood() {
//     return ""
// }

// var food = getFood()

// if (food) {
//     console.log("yummy with " + food)
// } else {
//     console.log("oops")
// }

//-------------------------------------------------



//-------------------------------------------------
//complex/refence types / objects
//-------------------------------------------------

/*

 object

    => data/info/attr/properties  ==> state
    => func/methods/work/oprn     ==> behav
    => addr/location/reference    ==> identity

    obj ==> sbi


    e,g

        Trainer obj

            -> state ( name , age , skill )
            -> behav ( teach )
            -> identity ( where am i )

    class ==> description/blueprint/template of similar objects

    class  --> instance(s)


*/


//-------------------------------------------------
// class / constructor ( upto ES5 )
//-------------------------------------------------

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     // this.sayName = function () {
//     //     console.log(`im ${this.name}`)
//     // }
//     // this.sayAge = function () {
//     //     console.log(`im ${this.age} yrs old`)
//     // }
// }
// Person.prototype.sayName = function () {
//     console.log(`im ${this.name}`)
// }
// Person.prototype.sayAge = function () {
//     console.log(`im ${this.age} yrs old`)
// }

/**
 * 
 *  how to create object from class ?
 * 
 *  2 steps
 * 
 *   step-1: dynamic memory allocation : ==> 'new' keyword
 *   step-2: intilize obj's properties : ==> constructor
 * 
 *   syntax:
 * 
 *   var ref=new Constructor() 
 * 
 */


// var p1 = new Person("Nag", 36)
// var p2 = new Person("Indu", 31)
// var p3 = new Person("Ria", 4)
// var p4 = new Person("dia", 2)

//


//-------------------------------------------------
// class / constructor ( from ES6 - 2015 )
//-------------------------------------------------

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayName() {
//         console.log("im " + this.name)
//     }
//     sayAge() {
//         console.log("im " + this.age + " yrs old")
//     }
// }

// var p1 = new Person("Nag", 36)
// var p2 = new Person("Indu", 31)


//-------------------------------------------------
// dynamic properties
//-------------------------------------------------


// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayName() {
//         console.log("im " + this.name)
//     }
//     sayAge() {
//         console.log("im " + this.age + " yrs old")
//     }
// }

// var p1 = new Person("Nag", 36)
// var p2 = new Person("Kishore", 35)

/**
 * 
 *  imp-note :
 * 
 *  by default, all javascript objects are extensible, 
 *  i.e we can add new properties on fly if required
 * 
 */

// Object.preventExtensions(p1)
// console.log(Object.isExtensible(p1))
// p1.skill = "tech"

/**
 * 
 *  imp-note :
 * 
 *  by default, all javascript objects are configurable, 
 *  i.e we can delete existing properties on fly if not required
 * 
 */


// Object.seal(p1)
// console.log(Object.isSealed(p1))
// p1.skill="tech"
// delete p1.age


/**
 * 
 *  imp-note :
 * 
 *  by default, all javascript object's properties are modifiable, 
 *  
 * 
 */

// Object.freeze(p1)
// console.log(Object.isFrozen(p1))
// p1.skill="tech"
// delete p1.age
// p1.age=-10


// -----------------------------------------------------------------
// how to read/write obj's properties ?
// -----------------------------------------------------------------

/**
 * 
 *  way-1 : '.' notation
 *  way-2 : '[]' notation, if property has space or dash 
 * 
 */

class Person {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this['home-address'] = address
    }
}

var p1 = new Person("Nag", 36, "chennai")
console.log(p1.name)
console.log(p1['name'])
console.log(p1.age)
console.log(p1['age'])
console.log(p1['home-address'])

// -----------------------------------------------------------------





