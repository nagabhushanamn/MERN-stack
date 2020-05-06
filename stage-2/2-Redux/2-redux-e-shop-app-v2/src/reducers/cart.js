

export function cartReducer(state = [], action) {
    let { type } = action
    switch (type) {
        case 'BUY': {
            let { item } = action
            //....
            return [...state, item]
        }
        default: return state
    }
}