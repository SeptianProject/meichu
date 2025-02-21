import React from "react";
import Button from "../../../elements/buttons/Button.tsx";
import AuthInput from "../../../fragments/auth/AuthInput.tsx";
import AuthBadgeButton from "../../../fragments/auth/AuthBadgeButton.tsx";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { loginFormSchema, LoginFormSchema } from "../../../../schema/AuthSchema.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cleanAuthErrors, login, setIsAuthModalOpen } from "../../../../redux/slices/authSlice.ts";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook.ts";
import { handleApiError } from "../../../../hooks/errorHandler.ts";
import { loginAuth } from "../../../../services/authService.ts";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
     showPassword: boolean;
     handleTogglePassword: VoidFunction;
     onForgotPassword: VoidFunction;
}

const LoginForm: React.FC<LoginFormProps> = React.memo(({
     showPassword,
     handleTogglePassword,
     onForgotPassword
}) => {
     const queryClient = useQueryClient()
     const dispatch = useAppDispatch()
     const navigate = useNavigate()
     const { isAuthModalOpen } = useAppSelector(state => state.auth)

     const {
          register,
          handleSubmit,
          reset,
          setError,
          setValue,
          formState: { errors }
     } = useForm<LoginFormSchema>({
          resolver: zodResolver(loginFormSchema),
          defaultValues: {
               identifier: '',
               password: ''
          }
     })

     const loginMutation = useMutation({
          mutationFn: loginAuth,
          onSuccess: (data) => {
               reset()
               queryClient.invalidateQueries(['user'])
               queryClient.invalidateQueries(['userAvatar'])
               dispatch(login({
                    token: data.jwt,
                    userId: data.user.id
               }))
               dispatch(setIsAuthModalOpen(false))
               navigate('/dashboard')
          },
          onError: (error: Error) => {
               handleApiError(error, setError, dispatch, 'login')
          }
     })

     const onSubmit = async (data: LoginFormSchema) => {
          loginMutation.mutateAsync(data)
     }

     React.useEffect(() => {
          if (!isAuthModalOpen) {
               setValue('identifier', '')
               setValue('password', '')
          }

          return () => {
               dispatch(cleanAuthErrors())
          }
     }, [dispatch, isAuthModalOpen, setValue])

     return (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
               <div className="flex flex-col items-end gap-y-1">
                    <div className="flex flex-col items-start gap-y-2">
                         <AuthInput
                              icon={FaUser}
                              type="email"
                              placeholder="Your Email"
                              error={errors.identifier}
                              {...register('identifier')}
                         />
                         <AuthInput
                              icon={IoIosLock}
                              type="password"
                              placeholder="Password"
                              showPassword={showPassword}
                              onTogglePassword={handleTogglePassword}
                              error={errors.password}
                              {...register('password')}
                         />
                    </div>
                    <button
                         type="button"
                         onClick={onForgotPassword}
                         className="bg-gold bg-clip-text text-transparent text-xs lg:text-sm font-medium">
                         Forgot Password?
                    </button>
               </div>
               <Button
                    isGold
                    isWidthFull
                    title={loginMutation.isLoading ? 'Loading...' : 'Login'}
                    type="submit"
                    className="w-full"
               />
               <AuthBadgeButton />
          </form>
     );
})

export default LoginForm