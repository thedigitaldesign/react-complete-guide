// Packages
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey: 'd6459f1b'
    }
})

instance.defaults.headers.defaults['Authorization'] = 'd6459f1b'

export default instance
