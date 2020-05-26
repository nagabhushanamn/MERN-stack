

import 'bootstrap/dist/css/bootstrap.css'

//-------------------------------------------------------
// state
//-------------------------------------------------------

import { createStore, combineReducers } from 'redux'

const initialState = {

    counter: {
        count: 100
    }

}
const countReducer = (state = { count: 0 }, action) => {
    console.log("countReducer")
    let { type, value = 1 } = action
    switch (type) {
        case 'INCREMENT':
            return { count: state.count + value }
        case 'DECREMENT':
            return { count: state.count - value }
        default: return state
    }
}

const rootReducer = combineReducers({
    counter: countReducer
})

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



//-------------------------------------------------------
// ui ==> vannila-js | react | Angular | vue.js
//-------------------------------------------------------

//------------------------------------------------------
// Button components
//------------------------------------------------------

document.getElementById('plus-one')
    .addEventListener('click', e => {
        store.dispatch({ type: 'INCREMENT' })
    })

document.getElementById('plus-ten')
    .addEventListener('click', e => {
        store.dispatch({ type: 'INCREMENT', value: 10 })
    })

document.getElementById('minus-one')
    .addEventListener('click', e => {
        store.dispatch({ type: 'DECREMENT' })
    })

document.getElementById('minus-ten')
    .addEventListener('click', e => {
        store.dispatch({ type: 'DECREMENT', value: 10 })
    })



let count = 0

// /------------------------
//  Red Display
//------------------------

let count1Ele = document.getElementById('count1')
count = store.getState().counter.count
count1Ele.innerHTML = count

store.subscribe(() => {
    count = store.getState().counter.count
    count1Ele.innerHTML = count
})


// /------------------------
//  Green Display
//------------------------



let count2Ele = document.getElementById('count2')
count = store.getState().counter.count
count2Ele.innerHTML = count

store.subscribe(() => {
    count = store.getState().counter.count
    count2Ele.innerHTML = count
})


// /------------------------
//  Blue Display
//------------------------

let count3Ele = document.getElementById('count3')
count = store.getState().counter.count
count3Ele.innerHTML = count

store.subscribe(() => {
    count = store.getState().counter.count
    count3Ele.innerHTML = count
})