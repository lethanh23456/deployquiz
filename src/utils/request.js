import axios from 'axios';

const API_DOMAIN = "http://localhost:3000/";

export const get = async (path) => {
    const response = await axios.get(API_DOMAIN + path);
    return response.data;  
};

export const post = async (path, options) => {
    const response = await axios.post(API_DOMAIN + path, options);
    return response.data; 
};

export const del = async (path) => {
    const response = await axios.delete(API_DOMAIN + path);
    return response.data; 
};

export const patch = async (path, options) => {
    const response = await axios.patch(API_DOMAIN + path, options);
    return response.data;  
};
