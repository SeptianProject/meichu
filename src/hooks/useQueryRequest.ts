import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { getUser } from "../services/authService"
import { BrandAmbassadors, ProductCatalogsResponse, ProductCategoriesResponse, UserProfile } from "../types"
import { getBrandAmbassadors, getProductCatalogs, getProductCategories, getProductRequest } from "../services/productService"

const BASE_PROPS = {
     staleTime: 5 * 60 * 1000,
     cacheTime: 30 * 60 * 1000,
}

const userKeys = {
     user: ['user'] as const,
     userAvatar: ['userAvatar'] as const,
}

const productKeys = {
     all: ['products'] as const,
     lists: () => [...productKeys.all, 'lists'] as const,
     list: (filters: Record<string, unknown>) => [...productKeys.lists(), { filters }] as const,
     details: () => [...productKeys.all, 'detail'] as const,
     detail: (id: string) => [...productKeys.details(), id] as const,
     productRequest: (uuid: string) => ['productRequest', uuid] as const,
     productCategory: ['productCategory'] as const,
}

export const useUserData = (type: 'userAvatar' | 'user' = 'user', isOpen?: boolean) => {
     return useQuery<UserProfile>({
          queryKey: type === 'user' ? userKeys.user : userKeys.userAvatar,
          queryFn: () => getUser(`populate${type === 'user'
               ? '[requests][populate]=*&populate[likes][populate][product][populate]=*'
               : '=*'}`),
          enabled: isOpen ?? true,
          ...BASE_PROPS
     })
}

export const useProducts = (options?: UseQueryOptions<ProductCatalogsResponse>) => {
     return useQuery<ProductCatalogsResponse>({
          queryKey: productKeys.lists(),
          queryFn: getProductCatalogs,
          ...BASE_PROPS,
          ...options
     })
}

export const useProduct = (productId: string | undefined) => {
     return useQuery({
          queryKey: productKeys.detail(productId ?? ''),
          queryFn: async () => {
               const response: ProductCatalogsResponse = await getProductCatalogs()
               const product = response.data.find(
                    (product) => product.id === Number(productId)
               )
               if (!product) throw new Error('Product not found')
               return product
          },
          enabled: !!productId,
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
          ...BASE_PROPS
     })
}

export const useBrandAmbassadorData = () => {
     return useQuery<BrandAmbassadors>({
          queryKey: ['ambassador'],
          queryFn: getBrandAmbassadors,
          ...BASE_PROPS
     })
}