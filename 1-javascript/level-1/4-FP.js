"use strict"


console.log("---------------------------")
console.log('- FP -')
console.log("---------------------------")



/**
 *
 *  imp-note:
 *
 *  ==> function is an object in javascript.
 *
 */

//---------------------------------------------------
// how create/define function ?
//---------------------------------------------------
/**
 *
 *  2 ways
 *
 *  way-1 : function declaration / Named function
 *
 *          => function will get create at scope creation-phase
 *          => always hoist with function-obj
 *
 *  way-2 : function expression  / Anonymous function
 *
 *          => function will get create at scope execution-phase
 */

//---------------------------------------------------
// way-1 : function declaration / Named function
//---------------------------------------------------

// console.log(add1(12,13))//

function add1(n1, n2) {
    let result = n1 + n2
    return result
}

// console.log(add1(12,13))//


//---------------------------------------------------
// way-2 : function expression / Anonymous function
//---------------------------------------------------

// console.log(add2(12,13))//

let add2 = function (n1, n2) {
    return n1 + n2
}

// console.log(add2(12,13))//


//---------------------------------------------------
// function parameters
//---------------------------------------------------

/**
 *
 *  imp-note:
 *
 *  function can take zero or more params,not restricted by argument names
 *
 */


function f1(a, b) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
}

// f1(10,20,30,40)
// f1()

//----------------------------------
// e.g
//----------------------------------


function sum() {
    let len = arguments.length,
        result = 0,
        i = 0;
    while (i < len) {
        result += arguments[i]
        i++
    }
    return result
}


//----------------------------------
// can we do method overloading in JS ? No
//----------------------------------

function getLunch() {
    return "No lunch"
}
function getLunch(pay) {
    //..
    return "biryani"
}
function getLunch(pay, extra) {
    //..
    return "biryani" + "  soft-drink"
}

// console.log(getLunch())

function getLunch() {
    if (arguments.length === 0)
        return "No Lunch"
    if (arguments.length === 1)
        return "Biryani"
    if (arguments.length === 2)
        return "biryani" + "  soft-drink"
}

// console.log(getLunch())



//---------------------------------------------------
// function with default & rest parameters ( es6)
//---------------------------------------------------


function f2(a = 1, b = 2, ...c) {

    // if (!a)
    //     a = 1
    // if (!b)
    //     b = 2

    // or

    // a = a || 1
    // b = b || 2

    console.log(a)
    console.log(b)
    console.log(c[1])

}
// f2(10, 20, 30, 40, 50, 60, 70)



//---------------------------------------------------
// Quiz
//---------------------------------------------------

// function f3(...r, x, y) {
//     console.log(r)
//     console.log(x)
//     console.log(y)
// }
// f3(10,20,30)  // Syntax Error


//----------------------------------------------------
// FP principles
//----------------------------------------------------

/**
 * - A function can be stored in a variable or value
 */


function greet() {
    console.log("hello")
}
let sayHello = greet

// sayHello()

//----------------------------------------------------

/**
 * - A parameter of a function can be a function
 */

function greet(f) {
    console.log("--------------")
    if (f)
        f()
    else
        console.log("welcome")
    console.log("--------------")
}
// greet()

//-------------
// Tn state
//-------------
let tn_greet = function () {
    console.log("வரவேற்பு")
}
// greet(tn_greet)

//-------------
// arabic country
//-------------
let ar_greet = function () {
    console.log("أهلا بك")
}
// greet(ar_greet)


//--------------------------------
// Ex.
//--------------------------------


let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// console.log(numbers);
const asc = function (x, y) {
    // if (x === y) return 0
    // else if (x > y) return 1
    // else return -1
    // or
    return x - y
}
numbers.sort(asc)
// console.log(numbers);

//----------------------------------------------------

/**
 * 
 *  - The return value of a function can be a function
 * 
 */

function teach() {
    console.log("teaching javascript....")
    //..
    let learn = function () {
        console.log("learning javascript...")
    }
    //learn();
    console.log("teaching ends...")
    return learn;
}

// let learnFn = teach();

// learnFn()
// learnFn()

//----------------------------------------------------
// Higher Order Function / Function Composition
//----------------------------------------------------

/**
 *   // why we need ?
 * 
 *      to solve 2 design issues ?
 * 
 *      => code duplication
 *      => code tight-coupling
 */

// -------------------------------------
// code without hof
// -------------------------------------
//  function hello(){
//      console.log("hello..")
//      console.log('☺️')
//  }
//  function hi(){
//      console.log("hi")
//      console.log("☺️")
//  }

//  hello()
//  hi()

// -------------------------------------
// code with hof
// -------------------------------------

// e.g HOF
function withEmoji(f) {
    return function () {
        f()
        console.log('😀')
    }
}

function hello() {
    console.log("hello")
}
function hi() {
    console.log("hi")
}

let helloWithEmoji = withEmoji(hello);
// hello()
// helloWithEmoji()


//----------------------------------------------------
// Function Closure
//----------------------------------------------------

/**
 * 
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * 
 * 
 */

function teach(sub) {
    console.log("teaching " + sub)
    let notes = sub + "-notes"
    let fun = "bla bla"
    let learn = function () {
        console.log("learning with " + notes)
    }
    //learn()
    console.log("teaching ends")
    return learn
}

// let learnFn = teach("javascript");
// learnFn()
// learnFn()
// learnFn()

//----------------------------------------------------
//  when / where we need closure ?
//----------------------------------------------------

// #1 : to abstract public behav of any module

/**
 *   e.g counter module
 * 
 *    - increment
 *    - get
 *   
 */


// in global-scope

// self-executable function / IIFE ( immediatly invokable function expression)

// const counter = (function () {
//     console.log("init()")
//     let count = 0  // private
//     // public 
//     function increment() {
//         count++
//     }
//     function get() {
//         return count
//     }
//     return {
//         inc: increment,
//         get: get
//     }
// })();


//-----------------------------------------------------



/** 
 * 
 *  in javascript , global-scope is bad
 * 
 *  i.e any variable, 
 *  function in global scope are accesible to anyone ( e.g hacker )
 * 
*/

// self-executable function / IIFE 

/**
 * 
 *  why/where we need ?
 * 
 *  => any initilization that to happen only once in .js file,
 *     later it will be a closure to all child function(s)
 * 
 */

const obj = (function setup() {

    console.log("setup..")
    let name = "IIFE"
    let say = function () {
        console.log("im " + name)
    }
    return {
        sayName: say
    }

})()
obj.sayName()