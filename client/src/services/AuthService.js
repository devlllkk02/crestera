import axios from 'axios';
import { baseUrl } from '../constants/constants';


//vault-folders
export const newFolder = (data) => {
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

export const updateuser = (data) => {
    return axios.put(baseUrl + 'users/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//user-circle
export const newCircle = (data) => {
    return axios.post(baseUrl + 'circles/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getCircles = () => {
    return axios.get(baseUrl + 'circles/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getCircle = (id) => {
    return axios.get(baseUrl + 'circles/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateCircle = (data) => {
    return axios.put(baseUrl + 'circles/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const addMember = (data) => {
    return axios.put(baseUrl + 'circles/member', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const deleteCircle = (id) => {
    return axios.delete(baseUrl + 'circles/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


