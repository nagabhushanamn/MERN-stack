
//-----------------------------------------
// class ==> instance(s)
//-----------------------------------------

//-----------------------------------------
// ES5 - class
//-----------------------------------------

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.sayName = function () {
//     console.log("im " + this.name)
// }

//-----------------------------------------
// ES6 - class
//-----------------------------------------
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        console.log("Person :: constructor()")
    }
    sayName() {
        console.log("im " + this.name)
    }
}
// let p1 = new Person("Nag", 36)

//--------------------------------------------
// Inheritance , class IS-A class
//--------------------------------------------
class Employee extends Person {
    constructor(name, age, salary) {
        // this.name = name
        // this.age = age
        super(name, age)
        this.salary = salary
        console.log("Employee :: constructor()")
    }
    // sayName() {
    //     console.log("im " + this.name)
    // }
    saySalary() {
        console.log("im get" + this.salary + " only")
    }
    askForBonus() {
        return this.salary * 0.02
    }
}

// let e1 = new Employee("Nag", 36, 1000.00)

//--------------------------------------------


class Boss extends Employee {
    /**
     *  imp-note :  when we r not defining constructor, default constructor always exist
     */

    // override ==> re-implement super-class behav in different way
    askForBonus() {
        return this.salary * 0.2
    }
}

// let b1 = new Boss("Nag", 36, 1000.00)

//------------------------------------------------------------------------------


class Intern {
    constructor() {
        //....
    }
    // sattic / class methods
    static teach() {
        console.log("teach()")
    }
    // instance/object method
    listenAndWork() {
        console.log("intern is listening and working..")
    }
}

Intern.teach(); 

let i1 = new Intern()
i1.listenAndWork()

//---------------------------------------------------------