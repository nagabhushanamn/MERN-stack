


import axios from 'axios'

export function doReserve(seats) {
    let apiUrl = 'http://localhost:8080/seats/reserve'
    return axios.post(apiUrl, seats, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}