import axios from "axios";
import { apiUrl, token } from ".";
import { CreateProductSchema } from "../schema/ProductSchema";

export const createProductRequest = async (data: CreateProductSchema) => {
     const response = await axios.post(`${apiUrl}/requests`, { data }, {
          headers: { Authorization: `Bearer ${token}` }
     })
     console.log('Create product request:', response.data)
     return response.data;
}

export const getProductRequests = async () => {
     const response = await axios.get(`${apiUrl}/requests`, {
          headers: { Authorization: `Bearer ${token}` }
     })
     return response.data;
}