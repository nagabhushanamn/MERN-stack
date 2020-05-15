import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { todosReducer } from '../reducers/todos'

import thunk from 'redux-thunk'

const intialState = {
    todos: []
}
const rootReducer = combineReducers({
    todos: todosReducer
})

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

const store = createStore(rootReducer, intialState, enhancer)

export default store