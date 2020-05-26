

// function doMEAN_Tng() {
//     console.log("===============================")
//     console.log("--------------------")
//     console.log("lean mongodb")
//     console.log("--------------------")
//     console.log("lean express")
//     console.log("--------------------")
//     console.log("lean angular")
//     console.log("--------------------")
//     console.log("lean node")
//     console.log("--------------------")
//     console.log("===============================")
// }


// function doMERN_Tng() {
//     console.log("===============================")
//     console.log("--------------------")
//     console.log("lean mongodb")
//     console.log("--------------------")
//     console.log("lean express")
//     console.log("--------------------")
//     console.log("lean react")
//     console.log("--------------------")
//     console.log("lean node")
//     console.log("--------------------")
//     console.log("===============================")
// }


// doMEAN_Tng()
// doMERN_Tng()



function doMongo_Tng() {
    console.log("--------------------")
    console.log("lean mongodb")
    console.log("--------------------")
}

function doExpress_Tng() {
    console.log("--------------------")
    console.log("lean express")
    console.log("--------------------")
}

function doAngular_Tng() {
    console.log("--------------------")
    console.log("lean angular")
    console.log("--------------------")
}

function doReact_Tng() {
    console.log("--------------------")
    console.log("lean react")
    console.log("--------------------")
}

function doNode_tng() {
    console.log("--------------------")
    console.log("lean node")
    console.log("--------------------")
}


// HOF
function makeFullStackTech(f1, f2, f3, f4) {
    return function () {
        f1()
        f2()
        f3()
        f4()
    }
}

let doMERN_Tng = makeFullStackTech(doMongo_Tng, doExpress_Tng, doReact_Tng, doNode_tng)
doMERN_Tng()
