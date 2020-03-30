


var arr = []

//---------------------------------------------
function getF(i) {
    var func = function () {
        console.log(i)
    }
    return func;
}
for (var i = 100; i < 120; i++) {
    arr.push(getF(i))
}
//---------------------------------------------
let fn1 = arr[0]
let fn2 = arr[1]
fn1(); // 10
fn2(); // 11


//-----------------------------------------------
