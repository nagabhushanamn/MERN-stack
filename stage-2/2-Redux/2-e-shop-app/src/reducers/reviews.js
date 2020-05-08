
/*

{
    "1":[
        {},{}
    ],
    "2":[
        {},{},{}
    ]
}

*/

export function reviewsReducer(state = {}, action) {
    console.log('reviewsReducer')
    let { type } = action
    switch (type) {
        case 'LOAD_REVIEWS': {
            let { itemId, reviews } = action
            let prevReviews = state[itemId] || []
            return { ...state, [itemId]: [...prevReviews, ...reviews] }
        }
        case 'ADD_NEW_REVIEW': {
            let { itemId, review } = action
            let prevReviews = state[itemId] || []
            return { ...state, [itemId]: [...prevReviews, review] }
        }
        default: return state
    }
}