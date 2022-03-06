import axios from 'axios';
import { baseUrl } from '../constants/constants';

//start code here...
//example
export const NewFolder = (data) => {
    return axios.post(baseUrl + '/vault', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};