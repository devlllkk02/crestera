import axios from 'axios';
import { baseUrl } from '../constants/constants';


//vault-files
export const getFiles = (id,uid) => {
    return axios.get(baseUrl + 'files/fileId/'+ id + '?uid=' + uid, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getFileshome = (uid) => {
    return axios.get(baseUrl + 'files/fileId?uid=' + uid, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getFile = (id) => {
    return axios.get(baseUrl + 'files/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateFile = (data) => {
    return axios.put(baseUrl + 'files/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deleteFile = (id) => {
    return axios.delete(baseUrl + 'files/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const downloadFile = (id) => {
    return axios.get(baseUrl + 'files/download/' + id, {
        responseType:'blob',
    });
};


//vault-folders
export const newFolder = (data) => {
    return axios.post(baseUrl + 'folders/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getFolders = (id,uid) => {
    return axios.get(baseUrl + 'folders/folderId/'+ id + '?uid=' + uid, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getFoldershome = (uid) => {
    return axios.get(baseUrl + 'folders/folderId?uid=' + uid, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getShareFoldershome = (uid) => {
    return axios.get(baseUrl + 'folders/share?uid=' + uid, {
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

//get public circles
export const getPublicCircles = () => {
    return axios.get(baseUrl + 'circles/public/circles/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//get private circles
export const getPrivateCircles = (id) => {
    return axios.get(baseUrl + 'circles/private/circles/:id' + id,{
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

export const getCircleNotification = (id) => {
    return axios.get(baseUrl + 'circles/notification/'+ id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const addFolderMember = (data) => {
    return axios.put(baseUrl + 'folders/member', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//remove member form user circle
export const removeMember = (data) => {
    return axios.put(baseUrl + 'circles/member/remove', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const removeFolderMember = (data) => {
    return axios.put(baseUrl + 'folders/member/remove', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//update is pending
export const updateIsPending = (data) =>{
    return axios.patch(baseUrl + 'circles/member/update/pending',data,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}


export const updateMember = (data) => {
    return axios.patch(baseUrl + 'circles/member/update', data, {
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




//users
export const getUsers = () => {
    return axios.get(baseUrl + 'users/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getUser = (id) => {
    return axios.get(baseUrl + 'users/' + id, {
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

