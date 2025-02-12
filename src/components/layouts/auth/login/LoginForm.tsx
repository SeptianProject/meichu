import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import AuthInput from "../../../fragments/auth/AuthInput.tsx";
import AuthBadgeButton from "../../../fragments/auth/AuthBadgeButton.tsx";
import React from "react";
import { loginFormSchema, LoginFormSchema } from "../../../../schema/AuthSchema.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { cleanAuthErrors, login, setIsAuthModalOpen, setProfileActive } from "../../../../redux/slices/authSlice.ts";
import { useAppDispatch } from "../../../../redux/hook.ts";
import Button from "../../../elements/buttons/Button.tsx";
import { handleApiError } from "../../../../hooks/errorHandler.ts";
import { loginAuth } from "../../../../services/authService.ts";

interface LoginFormProps {
     showPassword: boolean;
     handleTogglePassword: VoidFunction;
     onProfile: VoidFunction;
     onForgotPassword: VoidFunction;
}

const LoginForm: React.FC<LoginFormProps> = React.memo(({
     showPassword,
     handleTogglePassword,
     onProfile,
     onForgotPassword
}) => {
     const dispatch = useAppDispatch()

     const {
          register,
          handleSubmit,
          setError,
          setValue,
          formState: { errors }
     } = useForm<LoginFormSchema>({
          resolver: zodResolver(loginFormSchema),
          values: {
               identifier: '',
               password: ''
          }
     })

     const loginMutation = useMutation({
          mutationFn: loginAuth,
          onSuccess: (data) => {
               dispatch(login({
                    token: data.jwt,
                    userId: data.user.id
               }))
               dispatch(setIsAuthModalOpen(false))
               dispatch(setProfileActive(true))
               onProfile()
          },
          onError: (error: Error) => {
               handleApiError(error, setError, dispatch, 'login')
          }
     })

     const onSubmit = async (data: LoginFormSchema) => {
          loginMutation.mutate(data)
     }

     React.useEffect(() => {
          return () => {
               dispatch(cleanAuthErrors())
          }
     }, [dispatch])

     React.useEffect(() => {
          if (loginMutation.isSuccess) {
               setValue('identifier', '')
               setValue('password', '')
          }
     }, [loginMutation.isSuccess, setValue])

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
                         className="text-dark/80 text-xs lg:text-sm font-medium 
                              dark:bg-gradient-to-r from-yellowLinear1 to-yellowLinear2
                              bg-clip-text dark:text-transparent">
                         Forgot Password?
                    </button>
               </div>
               <Button
                    isGradient
                    title={loginMutation.isLoading ? 'Loading...' : 'Login'}
                    type="submit"
                    className="w-full"
               />
               <AuthBadgeButton />
          </form>
     );
})

export default LoginForm;