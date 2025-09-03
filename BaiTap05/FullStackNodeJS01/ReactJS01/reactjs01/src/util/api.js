import Password from "antd/es/input/Password";
import axios from "./axios.customize";

const createUserApi = (name, email, password) => {
    const URL_API = "v1/api/register";
    const data = { name, email, password};
    return axios.post(URL_API, data);
}

const loginApi = (email, password) => {
    const URL_API = "v1/api/login";
    const data = { email, password};
    return axios.post(URL_API, data);
}

const getUserApi = () => {
    const URL_API = "v1/api/user";
    return axios.get(URL_API);
}

const getProductsByCategoryApi = (category, page = 1, limit = 6) => {
    const URL_API = `v1/api/products/${category}?page=${page}&limit=${limit}`;
    return axios.get(URL_API);
}

export {
    createUserApi, loginApi, getUserApi, getProductsByCategoryApi
}