import axios from "axios";

export const baseUrl = import.meta.env.VITE_PUBLIC_STRAPI_BASE_URL.replace('/api', '');
export const apiUrl = `${baseUrl}/api`;
export const token = localStorage.getItem('authToken');
export const userId = localStorage.getItem('userId');

if (!baseUrl) {
     console.error("Error: Base URL is not defined. Check your environment variables.");
}

export const axiosInstance = axios.create({
     baseURL: apiUrl
})

axiosInstance.interceptors.request.use(
     (config) => {
          if (token) {
               config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
     },
     (error) => {
          return Promise.reject(error)
     }
)

axiosInstance.interceptors.response.use(
     (response) => response,
     (error) => {
          if (error.response?.status === 401) {
               localStorage.removeItem('authToken');
               localStorage.removeItem('userId');
          }
          return Promise.reject(error)
     }
)

