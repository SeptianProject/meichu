import AuthLayout from './AuthLayout'
import AuthHeading from '../../fragments/auth/AuthHeading'
import AuthInput from '../../fragments/auth/AuthInput'
import { IoIosLock } from 'react-icons/io'
import Button from '../../elements/buttons/Button'
import { useForm } from 'react-hook-form'
import { resetPasswordSchema, ResetPasswordSchema } from '../../../schema/AuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { resetPasswordAuth } from '../../../services/AuthService'
import React from 'react'

interface ResetPasswordProps {
     email: string;
     isAnimating: boolean;
     isModalOpen: boolean;
     isModalClose: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
     isModalOpen,
     isAnimating,
     isModalClose,
}) => {
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<ResetPasswordSchema>({ resolver: zodResolver(resetPasswordSchema) })

     const resetPasswordMutation = useMutation({
          mutationFn: resetPasswordAuth,
          onSuccess: (data) => {
               console.log('Reset Password success:', data)
               isModalClose()
          },
          onError: (error) => {
               console.error('Reset Password error:', error)
          }
     })

     const onSubmit = (data: ResetPasswordSchema) => {
          resetPasswordMutation.mutate({ ...data })
          console.log('Reset Password data:', data)
     }

     return (
          <AuthLayout
               isAnimating={isAnimating}
               isModalClose={isModalClose}
               isModalOpen={isModalOpen}
               className='lg:min-h-[70vh] pb-20'
          >
               <AuthHeading title='Reset Your Password' />
               <form onSubmit={handleSubmit(onSubmit)}
                    className='flex gap-y-3 flex-col w-full h-full max-w-60 items-center justify-center'>
                    <input type="text" className='hidden' {...register('code')} />
                    <AuthInput
                         icon={IoIosLock}
                         type='password'
                         placeholder='Password'
                         error={errors.password}
                         showPassword={true}
                         {...register('password')}
                    />
                    <AuthInput
                         icon={IoIosLock}
                         type='password'
                         placeholder='Confirm Password'
                         error={errors.confirmPassword}
                         showPassword
                         {...register('confirmPassword')}
                    />
                    <p className="text-dark dark:text-light/80 text-[12px] dark:font-extralight">
                         <span className="text-red-600 text-xl mr-1">*</span>
                         * We will send you a message to set or reset your new password
                    </p>
                    <Button
                         isGradient
                         type="submit"
                         title="Submit"
                         className="w-full"
                    />
               </form>
          </AuthLayout>
     )
}

export default ResetPassword