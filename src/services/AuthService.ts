import axios from 'axios';
import { LoginFormSchema, RegisterFormSchema } from '../context/AuthContext';

const baseUrl = import.meta.env.VITE_PUBLIC_STRAPI_BASE_URL;

export const registerAuth = async (data: Pick<RegisterFormSchema, 'email' | 'password' | 'username'>) => {
     const response = await axios.post(`${baseUrl}/auth/local/register`, data)
     return response.data;
}

export const loginAuth = async (data: Pick<LoginFormSchema, 'identifier' | 'password'>) => {
     const response = await axios.post(`${baseUrl}/auth/local`, data)
     return response.data;
}

export const getUser = async () => {
     const token = localStorage.getItem('authToken');
     const id = localStorage.getItem('userId');
     const response = await axios.get(`${baseUrl}/users/${id}`, {
          headers: {
               Authorization: `Bearer ${token}`
          }
     })
     return response.data;
}

export const uploadAvatar = async (file: File) => {
     const token = localStorage.getItem('authToken')

     const formData = new FormData()
     formData.append('files', file)

     const response = await axios.post(`${baseUrl}/upload`, formData, {
          headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'multipart/form-data'
          }
     })

     return response.data[0];
}

export const updateUserProfile = async (
     username: string,
     profilePicture: string,
     telpNumber: string) => {
     const token = localStorage.getItem('authToken')
     const userId = localStorage.getItem('userId')

     const response = await axios.put(`${baseUrl}/users/${userId}`, {
          username,
          profilePicture,
          telpNumber
     }, {
          headers: {
               Authorization: `Bearer ${token}`
          }
     })
     return response.data;
}