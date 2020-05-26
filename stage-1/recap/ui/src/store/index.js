
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'



const countReducer = (state = 0, action) => {
    let { type, value } = action
    switch (type) {
        case 'INCREMENT':
            return state + value
        case 'DECREMENT':
            return state + value
        default: return state
    }
}

const rootReducer = combineReducers({
    count: countReducer
})
const initialState = {
    count: 100
}

/**
 * 
 *  redux async middleware
 * 
 *  -> thunk
 *  -> saga
 *  -> redux observables i.e based rxjs
 * 
 */

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store;