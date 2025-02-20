import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LikeProduct, LikeState } from "../../types"

const initialState: LikeState = {
     likedProducts: [],
}

const likeSlice = createSlice({
     name: 'like',
     initialState,
     reducers: {
          addLike: (state, action: PayloadAction<LikeProduct>) => {
               const { productId, uuid } = action.payload
               state.likedProducts.push({ productId, uuid })
          },
          removeLike: (state, action: PayloadAction<LikeProduct>) => {
               const { productId, uuid } = action.payload
               state.likedProducts = state.likedProducts.filter(
                    (product) => product.productId !== productId && product.uuid !== uuid
               )
          },
     }
})

export const {
     addLike,
     removeLike,
} = likeSlice.actions

export default likeSlice.reducer