
"use strict"


//----------------------------------------
// Function Expression
//----------------------------------------


// let getPrice = function () {
//     return 100 + 200
// }

// - or -

// let getPrice = () => {
//     return 100 + 200
// }


// --------------------------------------------------


// let getPrice = (count) => {
//     return count * (100 + 200)
// }

//- or -


// let getPrice = count => {
//     return count * (100 + 200)
// }

// --------------------------------------------------

// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax
// }

// -or- 


// let getPrice = (count, tax) => count * (100 + 200) + tax


// --------------------------------------------------


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200)
//     let total = cost + tax
//     return total
// }

// --------------------------------------------------
// why/where we need arrow function ?
// --------------------------------------------------
// #1 for compact function-argument :
// --------------------------------------------------

let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
numbers.sort()
numbers.sort(function (x, y) { return x - y })
// -or- 
numbers.sort((x, y) => { return x - y })
// -or- 
numbers.sort((x, y) => x - y)

/**
 * 
 *  sorting
 *  -------
 * 
 *      step-1 : compare
 *      step-2 : swap
 * 
 *  
 * 
 */


// -------------------------------------------------
// Quiz:
//---------------------------------------------------

// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(`${this.name} teaching...`)
//         let self = this
//         let askQues = function (q) {
//             console.log(`${self.name} answering ${q}`)
//         }
//         console.log(`teaching ends`)
//         return askQues
//     }
// }
// // today
// let askQues = tnr.doTeach()
// askQues("Q1")
// askQues("Q2")

// // tomorrow
// let tempTnr = {
//     name: 'kishore'
// }
// askQues = tnr.doTeach.call(tempTnr)
// askQues("Q3")


// --------------------------------------------------
// #2 to capture 'this'
// --------------------------------------------------

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(`${this.name} teaching...`)
        // let askQues = function (q) {
        //     console.log(`${this.name} answering ${q}`)
        // }
        // -or-
        let askQues = (q) => {
            console.log(`${this.name} answering ${q}`)
        }
        console.log(`teaching ends`)
        return askQues
    }
}
// // today
// let askQues = tnr.doTeach()
// askQues("Q1")
// askQues("Q2")

// // // tomorrow
// let tempTnr = {
//     name: 'kishore'
// }
// askQues = tnr.doTeach.call(tempTnr)
// askQues("Q3")

//--------------------------------------------------------------------

// // in global-scope

// // console.log(this)
// let normalFunc = function () {
//     console.log(this)
// }
// // normalFunc()

// let arrFunc = () => {
//     console.log(this)
// }
// // arrFunc()


// let person1 = {
//     name: "Nag"
// }
// let person2 = {
//     name: "Indu"
// }
// person1.normalFunc = normalFunc // static function binding
// person1.normalFunc()
// person1.arrFunc = arrFunc // static function binding
// person1.arrFunc()

// normalFunc.call(person2)
// arrFunc.call(person2)


//--------------------------------------------------------------------


function teach() {
    console.log(this.name + " teaching")
    // let askQues = function () {
    //     console.log(this.name + " answering ques")
    // }
    // -or-
    let askQues = () => {
        console.log(this.name + " answering ques")
    }
    return askQues
}

let nag_tnr = { name: 'Nag' }
let nag_askQues = teach.call(nag_tnr)
// nag_askQues.call(nag_tnr)
// or
nag_askQues()

let ki_tnr = { name: 'Kishore' }
nag_askQues.call(ki_tnr) // it never happened, becoz arrow function cannot bind with any other object

// ----------------------------------------------------------