



// function f1() {
//     console.log("f1()");
// }


// function withAuth(f) {
//     return function () {
//         console.log("👮‍")
//         f()
//     }
// }



// let newF = withAuth(f1)

// // on event e.g clicked login button
// newF()
// newF()


//--------------------------------------------

function isVeg(foodName) {
    return foodName.startsWith("v")
}
function isNonVeg(foodName) {
    return foodName.startsWith("n")
}
function isEle(itemName) {
    return itemName.startsWith("e")
}
function isStationary(itemName) {
    return itemName.startsWith("s")
}

// HOF
function wrapper(f1, f2) {
    return function (name) {
        return f1(name) && f2(name)
    }
}


let isFood = wrapper(isVeg, isNonVeg)
console.log(isFood("stone"))

let isItem = wrapper(isEle, isStationary)
console.log(isFood("ele"))



