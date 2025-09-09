import axios from "./axios.customize";

const createUserApi = (name, email, password) => {
  return axios.post("v1/api/register", { name, email, password });
};

const loginApi = (email, password) => {
  return axios.post("v1/api/login", { email, password });
};

const getUserApi = () => {
  return axios.get("v1/api/user");
};

const searchProductsApi = (params) => {
  return axios.get("v1/api/products/search", { params });
};

export {
  createUserApi,
  loginApi,
  getUserApi,
  searchProductsApi,
};
