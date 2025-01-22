import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalType = 'login' | 'register' | 'forgot-password' | 'reset-password'

interface AuthState {
     activeModal: ModalType
     isAnimating: boolean;
     profileActive: boolean;
     isAuthModalOpen: boolean;
     isAuthenticated: boolean;
     token: string | null;
     userId: number | null;
     resetCode: string | null;
     authError: {
          loginError?: string;
          registerError?: string;
          forgotPasswordError?: string;
          resetPasswordError?: string
     }
}

const initialState: AuthState = {
     activeModal: 'login',
     isAnimating: false,
     profileActive: false,
     isAuthModalOpen: false,
     isAuthenticated: Boolean(localStorage.getItem('authToken')),
     token: localStorage.getItem('authToken'),
     userId: localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null,
     resetCode: null,
     authError: {
          loginError: undefined,
          registerError: undefined,
          forgotPasswordError: undefined,
          resetPasswordError: undefined
     }
}

const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {
          setActiveModal: (state, action: PayloadAction<ModalType>) => {
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
          setResetCode: (state, action: PayloadAction<string | null>) => {
               state.resetCode = action.payload
          },
          login: (state, action: PayloadAction<{ token: string, userId: number }>) => {
               state.token = action.payload.token
               state.userId = action.payload.userId
               state.isAuthenticated = true
               localStorage.setItem('authToken', action.payload.token)
               localStorage.setItem('userId', String(action.payload.userId))
          },
          logout: (state) => {
               state.isAuthenticated = false
               state.token = null
               state.userId = null
               localStorage.removeItem('authToken')
               localStorage.removeItem('userId')
          },
          setAuthError: (state, action: PayloadAction<{
               type: ModalType,
               message?: string
          }>) => {
               const { type, message } = action.payload
               switch (type) {
                    case 'login':
                         state.authError.loginError = message;
                         break;
                    case 'register':
                         state.authError.registerError = message;
                         break;
                    case 'forgot-password':
                         state.authError.forgotPasswordError = message;
                         break;
                    case 'reset-password':
                         state.authError.resetPasswordError = message;
                         break;
               }
          },
          cleanAuthErrors: (state) => {
               state.authError = {
                    loginError: undefined,
                    registerError: undefined,
                    forgotPasswordError: undefined,
                    resetPasswordError: undefined
               }
          }
     }
})

export const {
     login,
     logout,
     setResetCode,
     setAuthError,
     setActiveModal,
     setIsAnimating,
     cleanAuthErrors,
     setProfileActive,
     setIsAuthModalOpen,
} = authSlice.actions

export default authSlice.reducer