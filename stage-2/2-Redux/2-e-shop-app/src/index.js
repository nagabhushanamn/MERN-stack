

import 'bootstrap/dist/css/bootstrap.css'
import store from './store'

// import { buy } from './actions/cart'
// import { loadItems } from './actions/items'



//----------------------------------------
// ItemList ui-component
//----------------------------------------

// setInterval(() => {
//     let action = loadItems();
//     store.dispatch(action)
// }, 5 * 1000)



//----------------------------------------
// Item ui-component
//----------------------------------------

// setInterval(() => {
//     let item = { id: Math.floor(Math.random() * 10), name: 'Mobile', price: 1000.00 }
//     let action = buy(item)
//     store.dispatch(action)
// }, 3000)


//----------------------------------------
// CartBadge ui-component
//----------------------------------------

// store.subscribe(() => {
//     let cart = store.getState().cart
//     let count = Object.keys(cart).length
//     document.getElementById('cart-count').innerHTML = count
// })