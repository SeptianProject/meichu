import { ImageFormats, ISO8601Date } from "./common"
import { ProductLike, ProductRequest } from "./product"

export interface UserAttributes {
     readonly username: string
     readonly email: string
}

export interface UserData {
     readonly id: number
     readonly attributes: UserAttributes
}

export interface UserProfile {
     readonly id: number
     readonly username: string
     readonly email: string
     readonly telephoneNumber: string
     readonly provider: string
     readonly confirmed: boolean
     readonly blocked: boolean
     readonly createdAt: ISO8601Date
     readonly updatedAt: ISO8601Date
     readonly likes: ProductLike[]
     readonly requests: ProductRequest[]
     readonly profilePicture: UploadResponse
}

export interface UploadResponse {
     readonly id: number
     readonly name: string
     readonly width: number
     readonly height: number
     readonly formats: ImageFormats
     readonly mime: string
     readonly size: number
     readonly url: string
     readonly createdAt: ISO8601Date
}

export interface BrandAmbassadors {
     readonly data: Array<{
          readonly id: number
          readonly attributes: {
               readonly name: string
               readonly description: string
               readonly socmed_links: {
                    readonly twitter: string
                    readonly instagram: string
                    readonly youtube: string
                    readonly tiktok: string
               }
               readonly image: {
                    readonly data: {
                         readonly id: number
                         readonly attributes: {
                              readonly name: string
                              readonly url: string
                              readonly formats: {
                                   readonly thumbnail: {
                                        readonly name: string
                                        readonly url: string
                                   }
                              }
                         }
                    }
               }
          }
     }>
}