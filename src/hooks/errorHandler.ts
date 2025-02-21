/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseFormSetError } from "react-hook-form";
import { Dispatch } from "redux";
import { logout, ModalType, setAuthError } from "../redux/slices/authSlice";
import axios from "axios";

export interface ApiError {
     status: number;
     message: string;
     details?: Record<string, any>;
}

export const handleApiError = (
     error: unknown,
     setError: UseFormSetError<any>,
     dispatch: Dispatch,
     modalType: ModalType
) => {
     if (axios.isAxiosError(error) && error.response) {
          const errorMessage = error.response.data?.error?.message || 'An unexpected error occurred'

          switch (error.response.status) {
               case 400:
                    handleValidationErrors(error.response.data?.error, setError)
                    break
               case 401:
               case 403:
                    handleAuthenticationErrors(error.response.data?.error, setError)
                    dispatch(logout())
                    break
          }
          dispatch(setAuthError({
               type: modalType,
               message: errorMessage
          }))
     } else {
          dispatch(setAuthError({
               type: modalType,
               message: 'An error occurred. Please try again later.'
          }))
     }
}

const handleAuthenticationErrors = (
     error: any,
     setError: UseFormSetError<any>
) => {
     const errorMessage = error?.message?.toLowerCase() || ''

     if (errorMessage) {
          if (errorMessage.includes('password')) {
               setError('password', {
                    type: 'manual',
                    message: 'Invalid password format'
               });
          } else if (errorMessage.includes('email') || errorMessage.includes('identifier')) {
               setError('identifier', {
                    type: 'manual',
                    message: 'Invalid email format'
               });
          }
     }
}

const handleValidationErrors = (
     error: any,
     setError: UseFormSetError<any>
) => {
     const errorMessage = error?.message?.toLowerCase() || ''

     if (errorMessage) {
          if (errorMessage.includes('password')) {
               setError('password', {
                    type: 'manual',
                    message: 'Invalid password'
               });
          } else if (errorMessage.includes('email') || errorMessage.includes('identifier')) {
               setError('identifier', {
                    type: 'manual',
                    message: 'Email not found'
               });
          }


     }
}