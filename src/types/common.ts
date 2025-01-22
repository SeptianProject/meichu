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