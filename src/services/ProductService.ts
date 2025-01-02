import axios from "axios";
import { apiUrl } from ".";
import { CreateProductSchema } from "../schema/ProductSchema";

export const createProductRequest = async (
     data: Pick<CreateProductSchema, 'uuid' | 'user' | 'name' | 'productType' | 'imvu' | 'references'>,
) => {
     const token = localStorage.getItem('authToken')

     const response = await axios.post(`${apiUrl}/requests`, { data }, {
          headers: { Authorization: `Bearer ${token}` }
     })
     console.log('Create product request:', response.data)
     return response.data;
}

export const getProductRequests = async () => {
     const token = localStorage.getItem('authToken')

     const response = await axios.get(`${apiUrl}/requests`, {
          headers: { Authorization: `Bearer ${token}` }
     })
     return response.data;
}