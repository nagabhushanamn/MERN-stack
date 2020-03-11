
//--------------------------------------
// problem : design issues
//--------------------------------------
/**
 * 
 *  ==> code scattering / duplication
 *  ==> code tangling  / tight-coupling
 * 
 */
// -----------------------------------------
// solution:
// -----------------------------------------

// Higher-Order-Function ==> Higher-Order-Programming

/*

    i.e function composition

        => write small independent function(s), 
           bring/compose them together with purpose

*/

//------------------------------------------
// dev-1
function f1() {
    console.log("f1()")
}
//dev-2
function f2() {
    console.log("f2()")
}
//------------------------------------------
// e.g Higher-Order-Function
//------------------------------------------

function withEmoji(f,/*f2,f3*/) {
    return function () {
        console.log("🐎")
        f()
        console.log("👍")
    }
}

function withAuth(f) {
    return function () {
        console.log("👮‍")
        f()
    }
}
//------------------------------------------

// f1()
// let f1WithEmoji=withEmoji(f1)
// f1WithEmoji()
// - or -
// withEmoji(f1)()
// withEmoji(f2)()
//------------------------------------------

// withAuth(withEmoji(f2))()
// or-

// f2()

// let f2WithEmoji=withEmoji(f2)
// f2WithEmoji();

// let f2WithEmojiAndAuth=withAuth(f2WithEmoji)
// f2WithEmojiAndAuth();

// let f2WithAuth = withAuth(f2);
// f2WithAuth()


//------------------------------------------





function min(number) {
    return number > 100
}

function max(number) {
    return number < 1000
}

let number = 101

// console.log(min(number))
// console.log(max(number))

console.log(min(number) && max(number))



// HOF
function logicalAnd(minFn, maxFn) {
    return function (number) {
        return minFn(number) && maxFn(number)
    }
}
let and = logicalAnd(min, max);
console.log(and(number))