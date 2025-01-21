import React from 'react'
import AuthLayout from './AuthLayout'
import Button from '../../elements/buttons/Button'
import AuthInput from '../../fragments/auth/AuthInput'
import AuthHeading from '../../fragments/auth/AuthHeading'
import { IoIosLock } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { resetPasswordSchema, ResetPasswordSchema } from '../../../schema/AuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { resetPasswordAuth } from '../../../services/authService'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { setActiveModal } from '../../../redux/slices/authSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'
interface ResetPasswordProps {
     isAnimating: boolean;
     isModalOpen: boolean;
     isModalClose: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
     isModalOpen,
     isAnimating,
     isModalClose,
}) => {
     const { resetCode } = useAppSelector((state) => state.auth)
     const dispatch = useAppDispatch()
     const [params] = useSearchParams()
     const navigate = useNavigate()

     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<ResetPasswordSchema>({ resolver: zodResolver(resetPasswordSchema) })

     const resetPasswordMutation = useMutation({
          mutationFn: resetPasswordAuth,
          onSuccess: () => {
               if (params.get('code')) {
                    params.delete('code')
                    navigate('/')
               }
               dispatch(setActiveModal('login'))
               isModalClose()
          },
          onError: (error) => {
               console.error('Reset Password error:', error)
          }
     })

     const onSubmit = (data: ResetPasswordSchema) => {
          if (!resetCode) return
          resetPasswordMutation.mutate({
               ...data,
               code: resetCode
          })
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
                    <input type="hidden"  {...register('code')} value={resetCode || ''} />
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
                         error={errors.passwordConfirmation}
                         showPassword
                         {...register('passwordConfirmation')}
                    />
                    <p className="text-dark dark:text-light/80 text-[12px] dark:font-extralight">
                         <span className="text-red-600 text-xl mr-1">*</span>
                         * We will send you a message to set or reset your new password
                    </p>
                    <Button
                         isGradient
                         type="submit"
                         title={resetPasswordMutation.isLoading ? 'Loading...' : 'Submit'}
                         className="w-full"
                    />
               </form>
          </AuthLayout>
     )
}

export default ResetPassword