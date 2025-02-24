import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { getUser } from "../services/authService"
import {
     ApiErrorResponse,
     BannerImages,
     BrandAmbassadors,
     ProductCatalogsResponse,
     ProductCategoriesResponse,
     UserProfile
} from "../types"
import {
     getBrandAmbassadors,
     getCustomImages,
     getProductCatalogs,
     getProductCategories,
     getProductRequest
} from "../services/productService"

const BASE_PROPS = {
     staleTime: 5 * 60 * 1000,
     cacheTime: 30 * 60 * 1000,
     retry: (failureCount: number, error: ApiErrorResponse) => {
          if (error.status === 401) return false;
          return failureCount < 3;
     }
} as const

const userKeys = {
     user: ['user'] as const,
     userAvatar: ['userAvatar'] as const,
} as const

const productKeys = {
     all: ['products'] as const,
     lists: () => [...productKeys.all, 'lists'] as const,
     list: (filters: Record<string, unknown>) => [...productKeys.lists(), { filters }] as const,
     details: () => [...productKeys.all, 'detail'] as const,
     detail: (id: string) => [...productKeys.details(), id] as const,
     productRequest: (uuid: string) => ['productRequest', uuid] as const,
     productCategory: ['productCategory'] as const,
} as const

interface QueryHookOptions<T> extends Partial<UseQueryOptions<T, ApiErrorResponse>> {
     onAuthError?: () => void;
}

export const useUserData = (
     type: 'userAvatar' | 'user' = 'user',
     isOpen?: boolean,
     options?: QueryHookOptions<UserProfile>
) => {
     return useQuery<UserProfile, ApiErrorResponse>({
          queryKey: type === 'user' ? userKeys.user : userKeys.userAvatar,
          queryFn: async () => {
               try {
                    const data = await getUser(`populate${type === 'user'
                         ? '[requests][populate]=*&populate[likes][populate][product][populate]=*'
                         : '=*'
                         }`);

                    if (!data) {
                         throw {
                              status: 404,
                              message: 'User data not found'
                         } as ApiErrorResponse;
                    }

                    return data;
               } catch (error) {
                    const apiError = error as ApiErrorResponse;
                    if (apiError.status === 401) {
                         options?.onAuthError?.();
                    }
                    throw apiError;
               }
          },
          enabled: isOpen ?? true,
          ...BASE_PROPS
     })
}

export const useProducts = (options?: QueryHookOptions<ProductCatalogsResponse>) => {
     return useQuery<ProductCatalogsResponse, ApiErrorResponse>({
          queryKey: productKeys.lists(),
          queryFn: async () => {
               try {
                    const data = await getProductCatalogs();
                    if (!data) {
                         throw {
                              status: 404,
                              message: 'Products not found'
                         } as ApiErrorResponse;
                    }
                    return data;
               } catch (error) {
                    const apiError = error as ApiErrorResponse;
                    if (apiError.status === 401) {
                         options?.onAuthError?.();
                    }
                    throw apiError;
               }
          },
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
     return useQuery<ProductCategoriesResponse, ApiErrorResponse>({
          queryKey: productKeys.productCategory,
          queryFn: getProductCategories,
          ...BASE_PROPS
     })
}

export const useBrandAmbassadorData = () => {
     return useQuery<BrandAmbassadors, ApiErrorResponse>({
          queryKey: ['ambassador'],
          queryFn: getBrandAmbassadors,
          ...BASE_PROPS
     })
}

export const useCustomImages = (isBanner: boolean) => {
     return useQuery<BannerImages, ApiErrorResponse>({
          queryKey: [isBanner ? 'bannerImages' : 'customImages'],
          queryFn: () => getCustomImages(isBanner ? 'banner-images' : 'custom-images'),
          ...BASE_PROPS
     })
}