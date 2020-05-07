

import { combineReducers } from 'redux'
import { cartReducer } from './cart'
import { itemsReducer } from './items'
import { reviewsReducer } from './reviews'
import { userReducer } from './user'

const rootReducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer,
    reviews: reviewsReducer,
    user: userReducer
})

export default rootReducer