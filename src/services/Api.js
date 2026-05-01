// src/lib/axios.js
import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_API_URL, // Base URL for API
  // baseURL: `https://rubiksoftwares.com/demoelectric/public/api`
  baseURL:`https://electricsign.in/public/api/`
  // timeout: 10000, // Request timeout
});

// Request interceptor to add headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const logoutFromAll = () => {

  sessionStorage.clear();
  window.location.href = "/auth/login"
}
// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Network Error:', error.message);
      toast.error('Network Error: Please check your internet connection.');

      return Promise.reject(new Error('Network Error: Please check your internet connection.'));
    }

    switch (error.response.status) {
      case 400:
      //  toast.error('Bad Request');

// 'Bad Request:', error.response.data.message
        console.error('Bad Request:', error.response.data.message);
        break;
      case 401:
        console.error('Unauthorized:', error.response.data.message);
      //  toast.error('Unauthorized');

      logoutFromAll();

        break;
      case 403:
        console.error('Forbidden:', error.response.data.message);
       // toast.error('Forbidden');

        break;
      case 404:
        console.error('Not Found:', error.response.data.message);
       // toast.error('Not Found');

        break;
      case 500:
        console.error('Internal Server Error:', error.response.data.message);
       // toast.error('Internal Server Error');

        break;
      default:
        console.error('Error:', error.response.data.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
