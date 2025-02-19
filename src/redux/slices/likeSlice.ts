import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LikeProduct, LikeState } from "../../types"

const initialState: LikeState = {
     likedProducts: [],
     isProfileDiscoverOpen: false,
     isProfileModalOpen: false,
     isMobile: window.innerWidth <= 768
}

const likeSlice = createSlice({
     name: 'like',
     initialState,
     reducers: {
          addLike: (state, action: PayloadAction<LikeProduct>) => {
               const { productId, uuid } = action.payload
               state.likedProducts.push({ productId, uuid })

               if (state.isMobile) {
                    state.isProfileDiscoverOpen = true
               } else {
                    state.isProfileModalOpen = true
               }
          },
          removeLike: (state, action: PayloadAction<LikeProduct>) => {
               const { productId } = action.payload
               state.likedProducts = state.likedProducts.filter(
                    (product) => product.productId !== productId
               )
          },
          setProfileDiscoverOpen: (state, action: PayloadAction<boolean>) => {
               state.isProfileDiscoverOpen = action.payload
          },
          setProfileModalOpen: (state, action: PayloadAction<boolean>) => {
               state.isProfileModalOpen = action.payload
          },
          setIsMobile: (state, action: PayloadAction<boolean>) => {
               state.isMobile = action.payload
          }
     }
})

export const {
     // toggleLike,
     addLike,
     removeLike,
     setProfileDiscoverOpen,
     setProfileModalOpen,
     setIsMobile,
} = likeSlice.actions

export default likeSlice.reducer