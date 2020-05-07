
import { createStore } from 'redux'

const initialState = {}

const userReducer = (state, action) => {
    let { type } = action
    switch (type) {
        case 'LOGIN': {
            let { userDet } = action
            return userDet
        }
    }
}


const store = createStore(userReducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store