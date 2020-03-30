"use strict"


console.log("---------------------------")
console.log('- scope aka execution-context-')
console.log("---------------------------")


// -----------------------------------------------
// scope / execution context
// -----------------------------------------------

/**
 *
 *  memory/stack-frame which contains args & local variables,
 *  to execute piece of instructions
 *
 *  2 phases
 *  ----------
 *
 *  phase -1 : creation / push
 *
 *  ==> all the variables declared with 'var' keyword,
 *      will get hoisted to top of scope with default value ( undefined )
 *
 *  phase -2 : execution / pop
 *
 *  ==> instructions executes in sequence
 *
 * -------------------------------------------------------------
 *
 *  imp-note:
 *
 *  ==> by default , javascript runtime has one global-scope
 * 
 *  ==> eacy function call also creates new-scope, 
 *      which is child of in which scope that function declared/created
 *
 * -------------------------------------------------------------
 *
 */

// ------------------------------------
// Quiz-1
// ------------------------------------
// debugger
// console.log("-first-line-")
// console.log(v)
// ------------------------------------


// ------------------------------------
// Quiz-2
// ------------------------------------

// debugger
// var v = 12
// function f1() {
//     console.log(v)
//     var v = 13
// }

// f1() // f1-scope <= global-scope



// ------------------------------------
// Quiz-3
// ------------------------------------

// debugger;
// var v=12
// function f1(){
//     function f2(){
//         console.log(v)
//     }
//     f2(); // v=undefined
//     var v=13
//     f2(); // v=13
// }
// f1();

// ------------------------------------
// Quiz-4
// ------------------------------------

// var v = 12
// var v = 13



// ------------------------------------
// Quiz-5
// ------------------------------------


// var v = 12
// if (true) {
//     var v = 13
// }
// console.log(v)


// ------------------------------------
// problems/limitations with 'var' keyword
// ------------------------------------

/**
 *
 * -> variable get hoist
 * -> can re-declare same variable within scope
 * -> no block-scope
 * 
 * solution:
 * 
 *  => using 'let' & 'const' keywords with block-scope
 *
 */

//-----------------------------------------------

// console.log(v) // error
// let v=12

//-----------------------------------------------

// let v = 12
// let v = 13 // error

//-----------------------------------------------

// let v = 12
// if (true) {
//     let v = 13 //  block-scoped
// }
// console.log(v)

//------------------------------
// const person = {
//     name: 'Nag'
// }

// // person=null // error
// person.name = "indu" // properties are mutable

//------------------------------
// summary
//------------------------------

/**
 * 
 *  #1 : use 'let' keyword for mutable reference
 *  #2 : use 'const' keyword for immutable refrerence
 *  #3 : avoid 'var' keyword for better/error-free code
 * 
 * 
 */

//-----------------------------------------------

// is it possible to use var in nested loop because there is no block scope

//-----------------------------------------------


// for(let i=0;i<2;i++){
//     console.log(i)
//     for(i=0;i<2;i++){
//         console.log(i)
//     }
// }



