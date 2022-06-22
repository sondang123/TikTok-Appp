import axios from 'axios';
console.log(process.env.REACT_APP_BASE_URL);

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const hello = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
