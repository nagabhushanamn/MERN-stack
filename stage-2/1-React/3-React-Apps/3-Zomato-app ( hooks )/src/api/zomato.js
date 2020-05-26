

import axios from 'axios';


export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '4bb2731842448700ba001d6aba72a38c',
        'Accept': 'application/json'
    }
})