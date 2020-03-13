


function Value(x) {
    this.x
}

Value.prototype.show = function () {
    return this.x
}
Value.prototype.show_x = function (y) {
    return this.x + y
}

let a=function(j,k){
    return j+k
}

var v=new Value(5)
v.show()
v.show_x(2)
