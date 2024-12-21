import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
     activeModal: 'login' | 'register' | 'forgot-password';
     isAnimating: boolean;
     profileActive: boolean;
     isAuthModalOpen: boolean;
     isAuthenticated: boolean;
     token: string | null;
     userId: string | null;
}

const initialState: AuthState = {
     activeModal: 'login',
     isAnimating: false,
     profileActive: false,
     isAuthModalOpen: false,
     isAuthenticated: false,
     token: localStorage.getItem('authToken'),
     userId: localStorage.getItem('userId')
}

const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {
          setActiveModal: (state, action: PayloadAction<'login' | 'register' | 'forgot-password'>) => {
               state.activeModal = action.payload
          },
          setIsAnimating: (state, action: PayloadAction<boolean>) => {
               state.isAnimating = action.payload
          },
          setProfileActive: (state, action: PayloadAction<boolean>) => {
               state.profileActive = action.payload
          },
          setIsAuthModalOpen: (state, action: PayloadAction<boolean>) => {
               state.isAuthModalOpen = action.payload
          },
          login: (state, action: PayloadAction<{ token: string, userId: string }>) => {
               state.isAuthenticated = true
               state.token = action.payload.token
               state.userId = action.payload.userId
               localStorage.setItem('authToken', action.payload.token)
               localStorage.setItem('userId', action.payload.userId)
          },
          logout: (state) => {
               state.isAuthenticated = false
               state.token = null
               state.userId = null
               localStorage.removeItem('authToken')
               localStorage.removeItem('userId')
          },
     }
})

export const {
     login,
     logout,
     setActiveModal,
     setIsAnimating,
     setIsAuthModalOpen,
     setProfileActive
} = authSlice.actions

export default authSlice.reducer