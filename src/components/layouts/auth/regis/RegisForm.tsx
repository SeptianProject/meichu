import React from "react";
import AuthBadgeButton from "../../../fragments/auth/AuthBadgeButton";
import Button from "../../../elements/buttons/Button.tsx";
import AuthInput from "../../../fragments/auth/AuthInput";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema, RegisterFormSchema } from "../../../../schema/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { registerAuth } from "../../../../services/authService.ts";

interface RegisFormProps {
     showPassword: boolean;
     handleTogglePassword: VoidFunction;
     showConfirmPass: boolean;
     handleToggleConfirmPass: VoidFunction;
     onLogin: VoidFunction;
}

const RegisForm: React.FC<RegisFormProps> = React.memo(({
     showPassword,
     handleTogglePassword,
     showConfirmPass,
     handleToggleConfirmPass,
     onLogin
}) => {
     const {
          reset,
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

     const registerMutation = useMutation({
          mutationFn: registerAuth,
          onSuccess: (data) => {
               reset()
               localStorage.setItem('authToken', data.jwt)
          },
          onError: (error) => {
               console.error('Register error:', error)
          }
     })

     const onSubmit: SubmitHandler<RegisterFormSchema> = (data) => {
          registerMutation.mutate(data)
          onLogin()
     }


     return (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
               <div className="flex flex-col gap-y-2">
                    <AuthInput
                         icon={FaUser}
                         type="email"
                         placeholder="Your Email"
                         error={errors.email}
                         {...register('email')}
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
                    <AuthInput
                         icon={IoIosLock}
                         type="text"
                         placeholder="Enter Username"
                         showPassword={showConfirmPass}
                         onTogglePassword={handleToggleConfirmPass}
                         error={errors.username}
                         {...register('username')}
                    />
                    <div className="text-dark dark:text-[#676767] text-xs font-medium dark:font-normal max-w-60 dark:max-w-56 text-start">
                         By clicking the
                         <span className="bg-gold text-transparent bg-clip-text px-1">
                              Register
                         </span>
                         button, you agree to the public offer
                    </div>
               </div>
               <div className="space-y-5">
                    <Button
                         isGold
                         isWidthFull
                         title="Register"
                    />
                    <AuthBadgeButton />
               </div>
          </form>
     );
})

export default RegisForm;