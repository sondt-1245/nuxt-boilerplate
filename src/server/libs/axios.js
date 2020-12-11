// gkc_hash_code : 01DNZSWBW99P5C4HNT6E5GZ89S
import axios from 'axios';
import { API_HOST } from '../../env/server';

export default axios.create({
    baseURL: API_HOST,
    headers: {
        'content-type': 'application/json',
    },
});
