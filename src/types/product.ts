import { ImageFormat, ISO8601Date } from "./common"
import { UserData } from "./user"

export interface ProductAttributes {
     readonly name: string
     readonly description: string
     readonly price: number
     readonly isBundle: boolean
}

export interface ProductData {
     readonly id: number
     readonly attributes: ProductAttributes
}

export interface BundleProducts {
     readonly name: string
     readonly main: string
     readonly items: string[]
}

export interface ProductLike {
     readonly id: number
     readonly attributes: {
          readonly product: {
               readonly data: ProductData
          }
     }
}

export interface ProductImage {
     readonly id: number
     readonly attributes: {
          readonly name: string
          readonly url: string
          readonly formats: {
               readonly thumbnail: ImageFormat
          }
     }
}

export interface Request {
     readonly id: number
     readonly name: string
     readonly productType: string
     readonly imvu: boolean
     readonly createdAt: ISO8601Date
     readonly isNew: boolean
}

export interface ProductRequestsResponse {
     readonly data: Array<{
          readonly id: number
          readonly attributes: {
               readonly name: string
               readonly productType: string
               readonly imvu: boolean
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
               readonly thumbnail: { readonly data: ProductImage }
               readonly images: { readonly data: ProductImage[] }
               readonly likes: ProductLike[]
               readonly categories: {
                    readonly data: Array<{
                         readonly id: number
                         readonly attributes: {
                              readonly name: string
                         }
                    }>
               }
          }
     }>
}