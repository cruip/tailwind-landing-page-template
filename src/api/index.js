import axios from 'axios';
import { apiURL, token } from './consts';

const api = axios.create({
    baseURL: apiURL,
    headers: {
        'auth-token': token()
    }
})

export default api