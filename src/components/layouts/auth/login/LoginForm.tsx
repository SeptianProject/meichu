import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import AuthInput from "../../../fragments/auth/AuthInput.tsx";
import AuthBadgeButton from "../../../fragments/auth/AuthBadgeButton.tsx";
import React from "react";
import { loginFormSchema, LoginFormSchema } from "../../../../schema/AuthSchema.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { loginAuth } from "../../../../services/AuthService.ts";
import { login, setIsAuthModalOpen, setProfileActive } from "../../../../redux/slices/authSlice.ts";
import { useAppDispatch } from "../../../../redux/hook.ts";
import Button from "../../../elements/buttons/Button.tsx";

interface LoginFormProps {
     showPassword: boolean;
     handleTogglePassword: () => void;
     onProfile: () => void;
     onForgotPassword: () => void;
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
          formState: { errors }
     } = useForm<LoginFormSchema>({ resolver: zodResolver(loginFormSchema) })

     const loginMutation = useMutation({
          mutationFn: loginAuth,
          onSuccess: (data) => {
               dispatch(login({
                    token: data.jwt,
                    userId: data.user.id
               }))
               dispatch(setIsAuthModalOpen(false))
               dispatch(setProfileActive(true))
          },
          onError: (error) => {
               console.log('Login error:', error)
          }
     })

     const onSubmit = (data: LoginFormSchema) => {
          loginMutation.mutate(data)
          onProfile()
     }

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
                    title="Login"
                    type="submit"
                    className="w-full"
               />
               <AuthBadgeButton />
          </form>
     );
})

export default LoginForm;