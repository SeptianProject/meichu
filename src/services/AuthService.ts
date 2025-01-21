import axios from 'axios';
import { ForgotPasswordSchema, LoginFormSchema, RegisterFormSchema, ResetPasswordSchema } from '../schema/AuthSchema';
import { apiUrl } from '.';

export const registerAuth = async (data: Pick<RegisterFormSchema, 'email' | 'password' | 'username'>) => {
     const response = await axios.post(`${apiUrl}/auth/local/register`, data)
     return response.data;
}

export const loginAuth = async (data: Pick<LoginFormSchema, 'identifier' | 'password'>) => {
     const response = await axios.post(`${apiUrl}/auth/local`, data)
     return response.data;
}

export const forgotPasswordAuth = async (data: Pick<ForgotPasswordSchema, 'email'>) => {
     const response = await axios.post(`${apiUrl}/auth/forgot-password`, data)
     return response.data
}

export const resetPasswordAuth = async (data: ResetPasswordSchema) => {
     const response = await axios.post(`${apiUrl}/auth/reset-password`, data)
     return response.data
}

export const getUser = async (params?: string) => {
     const token = localStorage.getItem('authToken')
     const userId = localStorage.getItem('userId')

     if (!token || !userId) {
          throw new Error('Token or userId not found')
     }

     const response = await axios.get(`${apiUrl}/users/${userId}?${params}`, {
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