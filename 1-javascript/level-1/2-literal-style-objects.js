"use strict"


console.log("---------------------------")
console.log('-literal-style-objects-')
console.log("---------------------------")


//-----------------------------------------
// Object
//-----------------------------------------

var person_v1 = new Object()
person_v1.name = "Nag"
person_v1.age = 36
person_v1.sayName = function () {
    console.log("im " + this.name)
}

// -or- literal-style
var person_v2 = {
    name: "Nag",
    age: 36,
    sayName: function () {
        console.log("im " + this.name)
    }
}

// e.g

var req_config = {
    url: "http://host/resource",
    http_method: 'GET',
    onSuccess: function (response) {
        //...
    }
}



//-----------------------------------------
// Array
//-----------------------------------------

var menu_v1 = new Array()
menu_v1[0] = "item-1"
menu_v1[1] = "item-2"
menu_v1[2] = "item-3"

// -or- literal-style

var menu_v2 = ["item-1", "item-2", "item-3"]



//-----------------------------------------
// RegExp
//-----------------------------------------

// var adharPattern = new RegExp("\\d{4}-\\d{4}-\\d{4}")

// -or- literal-style

var adharPattern = /^IND-\d{4}-\d{4}-\d{4}$/

var adhar = "IND-1212-1233-2346"
console.log(adharPattern.test(adhar))

//-------------------------------------------