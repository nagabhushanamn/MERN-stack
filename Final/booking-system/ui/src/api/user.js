
import axios from 'axios'

export function doSave(user) {
    let apiUrl = 'http://localhost:8080/register'
    return axios.post(apiUrl, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export function doLogin(credentials) {
    let apiUrl = 'http://localhost:8080/login'
    return axios.post(apiUrl, credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function loadUserProfile() {
    const authToken = sessionStorage.getItem('authToken') || ''
    let apiUrl = `http://localhost:8080/user/profile`
    return axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
}