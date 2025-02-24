export type ISO8601Date = string

export interface ImageFormat {
     readonly name: string
     readonly size: number
     readonly sizeInBytes: number
     readonly url: string
}

export interface ImageFormats {
     readonly large: ImageFormat
     readonly medium: ImageFormat
     readonly small: ImageFormat
     readonly thumbnail: ImageFormat
}

export interface BannerImages {
     readonly data: Array<{
          readonly id: string
          readonly attributes: {
               readonly uuid: string
               readonly image: {
                    readonly data: {
                         readonly id: string
                         readonly attributes: {
                              readonly name: string
                              readonly url: string
                              readonly formats: ImageFormats
                         }
                    }
               }
          }
     }>
}

export interface ApiErrorResponse {
     status: number;
     message: string;
     data?: unknown;
}

export interface ApiSuccessResponse<T> {
     data: T;
     meta?: unknown;
}