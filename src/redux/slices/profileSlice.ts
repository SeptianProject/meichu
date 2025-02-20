import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ProfileState {
     isTapDiscover: boolean
}

const initialState: ProfileState = {
     isTapDiscover: false
}

const profileSlice = createSlice({
     name: 'profile',
     initialState,
     reducers: {
          setTapDiscover: (state, action: PayloadAction<boolean>) => {
               state.isTapDiscover = action.payload
          }
     }
})

export const {
     setTapDiscover
} = profileSlice.actions

export default profileSlice.reducer