import axios from "axios";
import { apiUrl, token } from ".";
import { CreateProductSchema } from "../schema/ProductSchema";

export const createProductRequest = async (
     dataProduct: Pick<CreateProductSchema, 'user' | 'name' | 'productType' | 'references' | 'imvu'>,
) => {
     const response = await axios.post(`${apiUrl}/requests`, dataProduct, {
          headers: {
               'Content-Type': '',
               Authorization: `Bearer ${token}`
          }
     })
     console.log('Create product request:', response.data)
     return response.data;
}