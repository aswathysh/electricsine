import axiosInstance from '../Api.js';

export const loginUser = async (userData) => {

  try {
    const response = await axiosInstance.post('userlogin', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgetPasswordLogin = async (email) => {
console.log("email from service",email)
  try {
    const response = await axiosInstance.post('/forgot-password', email);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createUser = async (userData) => {

try {
  const response = await axiosInstance.post('register', userData);
  return response.data;
} catch (error) {
  throw error;
}
};
export const registerUser = async ({ data}) => {
  const response = await axiosInstance.post(`register`,data);
  return response.data;
};
export const updateUserPassword = async (data) => {
  console.log("datadata",data)
  const response = await axiosInstance.post(`/reset-password`,data);
  return response.data;
};