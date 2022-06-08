import axios from 'axios';
import { baseUrl } from '../constants/constants';


//vault-folders
export const NewFolder = (data) => {
    return axios.post(baseUrl + 'folders/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getFolders = () => {
    return axios.get(baseUrl + 'folders/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getFolder = (id) => {
    return axios.get(baseUrl + 'folders/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateFolder = (data) => {
    return axios.put(baseUrl + 'folders/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const deleteFolder = (id) => {
    return axios.delete(baseUrl + 'folders/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};




