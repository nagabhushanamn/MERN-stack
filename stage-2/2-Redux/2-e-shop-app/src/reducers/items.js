


export function itemsReducer(state = [], action) {
    console.log('itemsReducer')
    let { type } = action
    switch (type) {
        case 'LOAD_ITEMS': {
            let { items } = action
            return [...state, ...items]
        }
        default: return state
    }
}