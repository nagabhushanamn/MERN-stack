

import { createStore, combineReducers } from 'redux'
import { todosReducer } from '../reducers/todos'


const intialState = {
    todos: []
}
const rootReducer = combineReducers({
    todos: todosReducer
})

const store = createStore(rootReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

