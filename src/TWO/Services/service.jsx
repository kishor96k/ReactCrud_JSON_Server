import axios from 'axios';

const API_URL = 'http://localhost:3001/users';

export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data);
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log(error);
    }
}
export const getIndividualUser = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log(error);
    }
}

export const deleteIndividualUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log(error);
    }
}


export const updateIndividualUser = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/${id}`, data);
    } catch (error) {
        console.log(error);
    }
}