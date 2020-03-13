


var arr = []
//---------------------------------------------
for (var i = 10; i < 13; i++) {
    
    var func = function () {
        console.log(i)
    }
    //func()
    arr.push(func)

}
//---------------------------------------------
let fn1 = arr[0]
let fn2 = arr[1]
fn1(); // 10
fn2(); // 11