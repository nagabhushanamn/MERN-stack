"use strict"


console.log("---------------------------")
console.log('- FP -')
console.log("---------------------------")

//---------------------------------------------------
// how create/define function ?
//---------------------------------------------------

/**
 *  
 *  imp-note:
 * 
 *  ==> function is an object in javascript.
 * 
 */

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
 *          
 *        
 */

//---------------------------------------------------
// way-1 : function declaration / Named function
//---------------------------------------------------

// console.log(add1(12,13))//

// function add1(n1, n2) {
//     let result = n1 + n2
//     return result
// }

// console.log(add1(12,13))//


//---------------------------------------------------
// way-2 : function expression / Anonymous function
//---------------------------------------------------
// console.log(add2(12,13))//

// var add2 = function (n1, n2) {
//     return n1 + n2
// }

// console.log(add2(12,13))//


//---------------------------------------------------
// E.g
//---------------------------------------------------

let userType  // admin | trainer | participant
let userAction
function login() {
    userType = "trainer"
}
login();
if (userType === "admin") {
    userAction = function () {
        console.log("administration...")
    }
}
if (userType === "trainer") {
    userAction = function () {
        console.log("training...")
    }
}
if (userType === "participant") {
    userAction = function () {
        console.log("learning...")
    }
}
userAction()
//---------------------------------------------------