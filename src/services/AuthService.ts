import axios from 'axios';
import { LoginFormSchema, RegisterFormSchema } from '../context/AuthContext';

const baseUrl = import.meta.env.VITE_PUBLIC_STRAPI_BASE_URL.replace('/api', '');
const apiUrl = `${baseUrl}/api`;

export const getFullImageUrl = (path: string) => {
     if (!path) return '';
     const cleanPath = path.replace('/api', '');
     return `${baseUrl}${cleanPath}`;
}

export const registerAuth = async (data: Pick<RegisterFormSchema, 'email' | 'password' | 'username'>) => {
     const response = await axios.post(`${apiUrl}/auth/local/register`, data)
     return response.data;
}

export const loginAuth = async (data: Pick<LoginFormSchema, 'identifier' | 'password'>) => {
     const response = await axios.post(`${apiUrl}/auth/local`, data)
     return response.data;
}

export const getUser = async () => {
     const token = localStorage.getItem('authToken');
     const id = localStorage.getItem('userId');
     const response = await axios.get(`${apiUrl}/users/${id}`, {
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

     const response = await axios.post(`${apiUrl}/upload`, formData, {
          headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'multipart/form-data'
          }
     })

     return response.data
}

export const updateUserProfile = async (
     username: string,
     profilePicture: number | null,
     telpNumber: string
) => {
     const token = localStorage.getItem('authToken')
     const userId = localStorage.getItem('userId')

     const response = await axios.put(`${apiUrl}/users/${userId}`, {
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