import { apiUrl, axiosInstance } from ".";
import { CreateProductSchema } from "../schema/ProductSchema";

export const createProductRequest = async (data: CreateProductSchema) => {
     const token = localStorage.getItem('authToken')
     const response = await axiosInstance.post(`${apiUrl}/requests`, { data }, {
          headers: { Authorization: `Bearer ${token}` }
     })
     return response.data
}

export const updateProductRequest = async (uuid: string, data: CreateProductSchema) => {
     const token = localStorage.getItem('authToken')
     const response = await axiosInstance.put(`${apiUrl}/requests/${uuid}`, { data }, {
          headers: { Authorization: `Bearer ${token}` }
     })
     return response.data
}

export const getProductRequest = async (source?: string) => {
     const response = await axiosInstance.get(`${apiUrl}/requests/${source}`)
     return response.data
}

export const getBrandAmbassadors = async () => {
     const response = await axiosInstance.get(`${apiUrl}/ambassadors`)
     return response.data
}

export const getCategories = async (source?: string) => {
     const response = await axiosInstance.get(`${apiUrl}/${source}`)
     return response.data
}

export const getProducts = async (source?: string) => {
     const response = await axiosInstance.get(`${apiUrl}/${source}`)
     return response.data
}

export const getCustomImages = async (source?: string) => {
     const response = await axiosInstance.get(`${apiUrl}/${source}`)
     return response.data
}