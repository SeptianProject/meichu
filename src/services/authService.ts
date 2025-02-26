import { ForgotPasswordSchema, LoginFormSchema, RegisterFormSchema, ResetPasswordSchema } from '../schema/AuthSchema';
import { apiUrl, axiosInstance } from '.';

export const registerAuth = async (data: RegisterFormSchema) => {
     const response = await axiosInstance.post(`/auth/local/register`, data)
     return response.data;
}

export const loginAuth = async (data: LoginFormSchema) => {
     const response = await axiosInstance.post(`/auth/local`, {
          identifier: data.identifier,
          passwoword: data.password
     })
     return response.data;
}

export const googleAuth = async (callback: string) => {
     const response = await axiosInstance.get(`${apiUrl}/auth/google/callback?${callback}`)
     return response.data;
}


export const forgotPasswordAuth = async (data: Pick<ForgotPasswordSchema, 'email'>) => {
     const response = await axiosInstance.post(`${apiUrl}/auth/forgot-password`, data)
     return response.data
}

export const resetPasswordAuth = async (data: ResetPasswordSchema) => {
     const response = await axiosInstance.post(`${apiUrl}/auth/reset-password`, data)
     return response.data
}

export const getUser = async (params?: string) => {
     const token = localStorage.getItem('authToken')
     const userId = localStorage.getItem('userId')

     if (!token || !userId) return

     const response = await axiosInstance.get(`${apiUrl}/users/${userId}?${params}`, {
          headers: {
               Authorization: `Bearer ${token}`
          }
     })
     return response.data;
}

export const uploadFile = async (file: File) => {
     const token = localStorage.getItem('authToken')

     const formData = new FormData()
     formData.append('files', file)

     const response = await axiosInstance.post(`${apiUrl}/upload`, formData, {
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

     const response = await axiosInstance.put(`${apiUrl}/users/${userId}`, {
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
