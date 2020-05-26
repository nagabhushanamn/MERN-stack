


export function userReducer(state = { isLoggedIn: false, profile: {} }, action) {
    let { type } = action
    switch (type) {
        case 'LOAD_USER': {
            let { profile, isLoggedIn } = action
            return { profile, isLoggedIn }
        }
        case 'LOGOUT': {
            return { isLoggedIn: false, profile: {} }
        }
        default: return state
    }
}