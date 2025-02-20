export interface LikePayload {
     productId: number
     uuid: string
}

export interface Like extends LikePayload {
     userId: number
}

export interface LikeProduct {
     productId: number
     uuid: string
}

export interface LikeState {
     likedProducts: LikeProduct[]
}