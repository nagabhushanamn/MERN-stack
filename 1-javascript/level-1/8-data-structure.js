

/**
 * 
 *  data structure & algorithms
 *  -----------------------------
 * 
 *  ==> organize memory for data to perform CRUDSS operations
 * 
 *      CRUDSS => create,retreive,update,delete,sort,search
 * 
 * 
 *  primary data-structure
 *  -----------------------
 * 
 *   => Array/List
 *   => set ( ES6 )
 *   => map ( ES6 )
 * 
 */

//---------------------------------------------------------------------
// Array
/**
 * 
 *  ==> memory where we can keep all data-elements in seq with an index
 * 
 */
//---------------------------------------------------------------------



// let arr=new Array() // traditional style
// let arr = [] // literal style


// let names=[]
// names[0]="rupam"    ; // names.push("rupam")
// names[1]="nitish"   ; // names.push("nitish")

// console.log(names[0])
// console.log(names[1])


// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

//---------------------------------------------------------------------
// Array methods
//---------------------------------------------------------------------


// let products=[]
// products.push({id:1,name:'product-1'})  // mutate
// products.push({id:2,name:'product-2'})
// products.push({id:3,name:'product-3'})
// products.push({id:4,name:'product-4'})
// products.unshift({id:0,name:'product-0'})

// let result=products.concat({id:5,name:'product-5'}) // immutable
// let result=products.concat([{id:5,name:'product-5'}])
// delete products[3]
// products.splice(3,1)
// products.splice(3,1,{id:31,name:'product-31'},{id:32,name:'product-32'})
// let result=products.slice(3,4)
// products.reverse()

//-----------------------------------------------------------------------
// style of coding 
//-----------------------------------------------------------------------

// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * 
 *  1. imperative style  ( what/intention + how/implemenation )
 * 
 */




// function getOddNumbers() {
//     let out = []
//     for (let i = 0; i < inp.length; i++) {
//         let n = inp[i]
//         if (n % 2 !== 0) {
//             out.push(n)
//         }
//     }
//     return out
// }

// function getEvenNumbers() {
//     let out = []
//     for (let i = 0; i < inp.length; i++) {
//         let n = inp[i]
//         if (n % 2 === 0) {
//             out.push(n)
//         }
//     }
//     return out
// }


// function getEvenNumbersGreaterThanSix() {
//     let out = []
//     for (let i = 0; i < inp.length; i++) {
//         let n = inp[i]
//         if (n > 6) {
//             if (n % 2 === 0) {
//                 out.push(n)
//             }
//         }
//     }
//     return out
// }




/**
 * 
 *  1. declarative/functional style  ( what/intention  )
 * 
 */



//-----------------------------------------------
// data lib ( may get from third-party)
//-----------------------------------------------
// function filter(f) {
//     let out = []
//     for (let i = 0; i < inp.length; i++) {
//         let n = inp[i]
//         if (f(n)) {
//             out.push(n)
//         }
//     }
//     return out
// }
//-----------------------------------------------

// function getOddNumbers() {
//     return filter(n => n % 2 !== 0)
// }

// function getEvenNumbers() {
//     return filter(n => n % 2 == 0)
// }
// function getEvenNumbersGreaterThanSix() {
//     return filter(n => n > 6 && n % 2 == 0)
// }


//-------------------------------------------------------
// filter
//-------------------------------------------------------
// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let odds=inp.filter(n=>n%2!==0)
// let evens=inp.filter(n=>n%2==0)



//-------------------------------------------------------
// map 
//-------------------------------------------------------

// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tenTimesArray = inp.map(n => n * 10)



//-------------------------------------------------------
// reduce
//-------------------------------------------------------
// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum=inp.reduce((x,next)=>x+next)

//-------------------------------------------------------
// every
//-------------------------------------------------------

// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let areAllEven=inp.every(n=>n%2===0)

//-------------------------------------------------------
// some
//-------------------------------------------------------

// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let areSomeEven=inp.some(n=>n%2===0)

//-------------------------------------------------------
// find
//-------------------------------------------------------

// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let result=inp.find(n=>n%2==0)


//-------------------------------------------------------
// findIndex
//-------------------------------------------------------

// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let idx = inp.findIndex(n => n === 8)


//-------------------------------------------------------
// forEach
//-------------------------------------------------------

// let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// inp.forEach(n=>{
//     console.log(n)
// })



//-------------------------------------------------------
// includes
//-------------------------------------------------------

let inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let isFiveExist=inp.includes(5)





//------------------------------------------------------

// Set

/**
 * 
 *  a data structure which includes unique data elements
 * 
 */

//------------------------------------------------------


// let names=new Set()
// names.add("Nag")
// names.add("Indu")
// names.add("riya")
// names.add("riya")
// names.add("diya")
// names.add("unknown")

// names.delete('unknown')
// names.clear()
// names.has("Nag") // true
// names.forEach(name=>console.log(name))

//------------------------------------------------------

// ?????

// let cars=new Set();

// let car1={name:'bmw',year:2018}
// let car2={name:'bmw',year:2019}
// let car3={name:'audi',year:2020}

// cars.add(car1)
// cars.add(car2)
// cars.add(car3)

// console.log(cars)

//------------------------------------------------------
// WeakSet
//------------------------------------------------------

// let weakSet=new WeakSet();


// let x={value:1}
// let y={value:2}
// let z={value:3}

// weakSet.add(x)
// weakSet.add(y)
// weakSet.add(z)

// y=undefined


//------------------------------------------------------
// Map =>  key/user-identity  +  data-elemeny
//------------------------------------------------------


let map=new Map()
map.set("Nag",{car:"duster"})
map.set("Riya",{car:"benz-toy-car"})


let weakMap=new WeakMap();



//-------------------------------------------------------
// summary
//-------------------------------------------------------
/**
 * 
 *  list/array
 * 
 *    -> ordered output
 *    -> index based
 *    -> to hold duplicate data elements
 * 
 *  set
 * 
 *   -> keep unique data values
 * 
 *  map
 * 
 *  -> keep data in memory with user identity (key )
 * 
 * 
 * 
 * 
 */