import { apiUrl, axiosInstance } from "."

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

export const deleteProductLike = async (uuid: string) => {
     const token = localStorage.getItem('authToken')

     const response = await axiosInstance.delete(`${apiUrl}/likes/${uuid}`, {
          headers: { Authorization: `Bearer ${token}` }
     })
     return response.data
}