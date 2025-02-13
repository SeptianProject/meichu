import { useQuery } from "@tanstack/react-query"
import { getUser } from "../services/authService"
import { ProductCatalogsResponse, ProductCategoriesResponse, UserProfile } from "../types"
import { getProductCatalogs, getProductCategories, getProductRequest } from "../services/productService"

const BASE_PROPS = {
     staleTime: 5 * 60 * 1000,
     cacheTime: 30 * 60 * 1000,
}

const userKeys = {
     user: ['user'] as const,
     userAvatar: ['userAvatar'] as const,
}

const productKeys = {
     product: ['product'] as const,
     productRequest: (uuid: string) => ['productRequest', uuid] as const,
     productCategory: ['productCategory'] as const,
}

export const useUserData = (type: 'userAvatar' | 'user' = 'user') => {
     return useQuery<UserProfile>({
          queryKey: type === 'user' ? userKeys.user : userKeys.userAvatar,
          queryFn: () => getUser(`populate${type === 'user'
               ? '[requests][populate]=*&populate[likes][populate][product][populate]=*'
               : '=*'}`),
          ...BASE_PROPS
     })
}

export const useProductCatalog = () => {
     return useQuery<ProductCatalogsResponse>({
          queryKey: productKeys.product,
          queryFn: getProductCatalogs,
          enabled: false,
          ...BASE_PROPS
     })
}

export const useProductRequest = (uuid: string | undefined) => {
     return useQuery({
          queryKey: productKeys.productRequest(uuid ?? ''),
          queryFn: () => getProductRequest(uuid ?? ''),
          enabled: !!uuid,
          ...BASE_PROPS
     })
}

export const useProductCategory = () => {
     return useQuery<ProductCategoriesResponse>({
          queryKey: productKeys.productCategory,
          queryFn: getProductCategories,
          enabled: false,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          ...BASE_PROPS
     })
}