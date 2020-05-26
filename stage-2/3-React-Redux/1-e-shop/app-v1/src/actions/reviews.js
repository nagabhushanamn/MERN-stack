


export function loadReviews(itemId, size) {
    ///..
    let reviews = [
        { author: 'Nag', stars: 5, body: 'good' },
        { author: 'Indu', stars: 3, body: 'bad' }
    ]
    return { type: 'LOAD_REVIEWS', itemId, reviews }
}


export function addNewReview(itemId, review) {
    //..
    return { type: 'ADD_NEW_REVIEW', itemId, review }
}