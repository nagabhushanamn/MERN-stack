


export function userReducer(state = { isLoggedIn: false, profile: {} }, action) {
    let { type } = action
    switch (type) {
        case 'LOAD_USER': {
            let { profile, isLoggedIn } = action
            return { profile, isLoggedIn }
        }
        default: return state
    }
}