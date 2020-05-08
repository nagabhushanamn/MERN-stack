

import { combineReducers } from 'redux'
import { cartReducer } from './cart'
import { itemsReducer } from './items'
import { reviewsReducer } from './reviews'

const rootReducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer,
    reviews: reviewsReducer
})

export default rootReducer