


// normal function

// function normalFunc() {
//     let i = 0;
//     while (i < 5) {
//         //..
//         console.log(i)
//         i++
//     }
// }

// normalFunc()


//--------------------------------------


// generator function

// function* generatorFunc() {
//     console.log("generatorFunc invoked...")
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }
// let it = generatorFunc();

//--------------------------------------

// Ex. sum of 3 numbers 

/**
 * 
 *  3 numbers will available at different intervals ( async )
 * 
 */



// function* sum() {
//     console.log(".....")
//     let x = yield "give me x value"
//     console.log(x)
//     let y = yield "give me y value"
//     console.log(y)
//     let z = yield "give me z value"
//     console.log(z)
//     return x + y + z
// }

// let it=sum()


//---------------------------------------------------------------------



function* eat() {
    console.log("eat.....")
    let idly = yield "give me idly"
    console.log(idly)
    let chutney = yield "give me chutney"
    console.log("yummy with " + idly + " & " + chutney)
    return "energy"
}


//---------------------------------------------------------------------


