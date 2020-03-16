

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
 *   => set
 *   => map
 * 
 */

//--------------------------------------------------------
// Array
/**
 * 
 *  ==> memory where we can keep all data-elements in seq with an index
 * 
 */
//--------------------------------------------------------

//  let arr=new Array()
// let arr = []
// arr[0]="item-1" // create
// console.log(arr[0]) // retreive

//--------------------------------------------------------
// array methods
//--------------------------------------------------------

let products = [
    { id: 1, name: 'item-1', price: 100 },
    { id: 2, name: 'item-2', price: 200 }
]


// mutable
// products.push({ id: 3, name: 'item-3', price: 300 })
// products.unshift({ id: 3, name: 'item-3', price: 300 })

// immutable
let newProducts = products.concat({ id: 3, name: 'item-3', price: 300 })

//------------------------------------------------------------

