import { ImageFormat, ISO8601Date } from "./common"
import { UserData } from "./user"

export interface ProductAttributes {
     readonly name: string
     readonly description: string
     readonly price: number
     readonly isBundle: boolean
     readonly thumbnail: {
          readonly url: string
     }
}

export interface BundleProducts {
     readonly name: string
     readonly main: string
     readonly items: string[]
}

export interface ProductLike {
     readonly id: number
     readonly product: ProductAttributes
}

export interface ProductImage {
     readonly id: number
     readonly name: string
     readonly url: string
     readonly formats: {
          readonly thumbnail: ImageFormat
     }
}

export interface ProductRequest {
     readonly id: number
     readonly name: string
     readonly productType: string
     readonly imvu: boolean
     readonly isNew: boolean
     readonly uuid: string
     readonly createdAt: ISO8601Date
     readonly references: ProductImage
     readonly user: {
          readonly data: UserData
     }
}

export interface ProductRequestsResponse {
     readonly data: Array<{
          readonly id: number
          readonly attributes: {
               readonly name: string
               readonly productType: string
               readonly imvu: boolean
               readonly isNew: boolean
               readonly uuid: string
               readonly createdAt: ISO8601Date
               readonly references: {
                    readonly data: ProductImage[]
               }
               readonly user: {
                    readonly data: UserData
               }
          }
     }>
}

export interface ProductCategoriesResponse {
     readonly data: Array<{
          readonly id: number
          readonly attributes: {
               readonly name: string
               readonly products: ProductCatalogsResponse['data']
          }
     }>
}

export interface ProductCatalogsResponse {
     readonly data: Array<{
          readonly id: number
          readonly attributes: {
               readonly name: string
               readonly description: string
               readonly price: number
               readonly product_link: string
               readonly createdAt: ISO8601Date
               readonly isBundle: boolean
               readonly thumbnail: { readonly data: { readonly attributes: ProductImage } }
               readonly images: { readonly data: Array<{ readonly attributes: ProductImage }> }
               readonly likes: ProductLike[]
               readonly categories: {
                    readonly data: Array<{
                         readonly id: number
                         readonly attributes: { readonly name: string }
                    }>
               }
          }
     }>
}