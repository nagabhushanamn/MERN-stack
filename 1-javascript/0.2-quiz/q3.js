
"use strict"

let person = {
    name: 'Nag'
}
function func() {
    // console.log(v) // reference error
    // console.log(person.age) // undefined
    // console.log(person.name())// type error
    // console.log(undefined.name)// type error
    // console.log(this.name) // type error
}
func()