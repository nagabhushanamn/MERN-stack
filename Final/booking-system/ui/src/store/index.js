

import { createStore, combineReducers } from 'redux'

const seatsReducer = (state = {}, action) => {
    let { type } = action
    switch (type) {
        case 'LOAD_RESERVED_SEATS': {
            let { reservedSeats } = action
            return { ...state, reservedSeats }
        }
        case 'SELECT_SEATS': {
            let { seatNumber } = action
            let selectedSeats = state.selectedSeats
            if (selectedSeats.includes(seatNumber))
                selectedSeats = selectedSeats.filter(n => n !== seatNumber)
            else
                selectedSeats = [...selectedSeats, seatNumber]
            return { ...state, 'selectedSeats': selectedSeats }
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    seats: seatsReducer
})

const intialState = {
    seats: {
        reservedSeats: [],
        selectedSeats: []
    }
}

const store = createStore(rootReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store