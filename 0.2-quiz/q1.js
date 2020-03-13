"use strict"

// let pName="Global"
let person = {
    pName: 'Nag', // obj's property
    sayName: function () {
        let pName = "Local"
        console.log(`im ${pName}`) // reads scope hierarchy
        console.log(`im ${person.pName}`) // reads obj's property
        console.log(`im ${this.pName}`) // reads obj's property
    }
}
person.sayName()

// let oldPerson = person
// person = {
//     pName: "Ria"
// }
// oldPerson.sayName();