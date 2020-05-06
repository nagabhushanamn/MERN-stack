

import 'bootstrap/dist/css/bootstrap.css'
import store from './store'



//----------------------------------------
// Item ui-component
//----------------------------------------

// setInterval(() => {

//     let item = { id: 1, name: 'Mobile', price: 1000.00 }
//     let action = { type: 'BUY', item }

//     store.dispatch(action)

// }, 3000)


//----------------------------------------
// CartBadge ui-component
//----------------------------------------

store.subscribe(() => {
    let cart = store.getState().cart
    let count = cart.length
    document.getElementById('cart-count').innerHTML = count
})