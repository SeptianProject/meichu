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
import { useAppDispatch } from "../../../../redux/hook.ts";
import { handleApiError } from "../../../../hooks/errorHandler.ts";
import { googleAuth, loginAuth } from "../../../../services/authService.ts";
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
     const [isSubmitting, setIsSubmitting] = React.useState(false)

     const {
          register,
          handleSubmit,
          reset,
          setError,
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
          retry: false,
          onSuccess: (data) => {
               reset()
               queryClient.invalidateQueries(['user'])
               queryClient.invalidateQueries(['userAvatar'])
               dispatch(login({
                    token: data.jwt,
                    userId: data.user.id,
               }))
               dispatch(setIsAuthModalOpen(false))
               navigate('/dashboard')
          },
          onError: (error: Error) => {
               handleApiError(error, setError, dispatch, 'login')
          }
     })

     const onSubmit = async (data: LoginFormSchema) => {
          if (isSubmitting) return
          setIsSubmitting(true)
          try {
               await loginMutation.mutateAsync(data)
          } finally {
               setIsSubmitting(false)
          }
     }

     const handleGoogleLogin = React.useCallback(() => {
          const params = new URLSearchParams(window.location.search)
          const accessToken = params.get('access_token')
          window.history.replaceState({}, document.title, window.location.pathname)
          if (accessToken) {
               try {
                    googleAuth(`access_token=${accessToken}`).then((data) => {
                         return (
                              data && dispatch(login({
                                   token: data.jwt,
                                   userId: data.user.id
                              }))
                         )
                    })
                    navigate('/dashboard')
               } catch (error) {
                    console.error(error)
               }
          }
     }, [dispatch, navigate])

     React.useEffect(() => {
          handleGoogleLogin()

          return () => {
               queryClient.removeQueries(['user'])
               queryClient.removeQueries(['userAvatar'])
               dispatch(cleanAuthErrors())
          }
     }, [dispatch, queryClient, handleGoogleLogin])

     return (
          <>
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
               </form>
               <AuthBadgeButton />
          </>
     );
})

export default LoginForm