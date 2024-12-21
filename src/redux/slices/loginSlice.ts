import { createSlice } from '@reduxjs/toolkit'

interface LoginState {
     isLogin: boolean
}

const initialState: LoginState = {
     isLogin: false
}

const loginSlice = createSlice({
     name: 'login',
     initialState,
     reducers: {
          loginReducer: (state) => {
               state.isLogin = true
          }
     }
})

export const { loginReducer } = loginSlice.actions
export default loginSlice.reducer