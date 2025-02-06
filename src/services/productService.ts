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

export const getProductCategories = async () => {
     const response = await axiosInstance.get(`${apiUrl}/categories`)
     return response.data
}

export const getProductCatalogs = async () => {
     const response = await axiosInstance.get(`${apiUrl}/products`)
     return response.data
}

export const createProductLike = async (userId: number, productId: number) => {
     const token = localStorage.getItem('authToken')

     const response = await axiosInstance.post(`${apiUrl}/likes`, {
          data: {
               user: userId,
               product: productId
          }
     }, {
          headers: { Authorization: `Bearer ${token}` }
     })
     return response.data
}
