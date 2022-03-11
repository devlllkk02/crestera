import axios from 'axios';
import { baseUrl } from '../constants/constants';

//start code here...
//example

//vault-folders
export const NewFolder = (data) => {
    return axios.post(baseUrl + '/folders', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export const getFolders= (page) => {
    return axios.get(baseUrl + '/folders?page=' + page, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export const addComputer = (data) => {
    return axios.post(baseUrl + '/folders', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateComputer = (id,data) => {
    return axios.put(baseUrl + '/folders/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export const deleteComputer = (id) => {
    return axios.delete(baseUrl + '/folders/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};