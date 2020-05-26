

export const doLogout = () => {
    sessionStorage.removeItem('authToken')
    return { type: 'LOGOUT' }
}

export const loadUser = (token) => {
    if (!token)
        token = sessionStorage.getItem('authToken')
    if (token) {
        //..
        const profile = {
            name: "NAG",
            email: 'nagabhushanamn@gmail.com',
            address: 'universe'
        }
        return { type: 'LOAD_USER', profile, isLoggedIn: true }
    } else {
        return { type: 'LOAD_USER', isLoggedIn: false }
    }
}

export const login = (username, password) => {
    // Fake Auth
    if (username === "user1" && password === "password") {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        sessionStorage.setItem('authToken', token)
        return loadUser(token)
    }
}