
import axios from 'axios'

export function doSearch({ from, to, travelDate }) {
    let apiUrl = `http://localhost:8080/bus/search?q=${from}-${to}`
    return axios.get(apiUrl)
}

