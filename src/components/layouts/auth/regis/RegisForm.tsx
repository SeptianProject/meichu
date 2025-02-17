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
          watch,
          handleSubmit,
          formState: { errors }
     } = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

     const email = watch('email')

     const generateUsername = (email: string) => {
          return email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
     }

     const registerMutation = useMutation({
          mutationFn: (data: RegisterFormSchema) => {
               const regsistrationData = {
                    ...data,
                    username: generateUsername(email)
               }
               return registerAuth(regsistrationData)
          },
          onSuccess: (data) => {
               reset()
               localStorage.setItem('authToken', data.jwt)
               onLogin()
          },
          onError: (error) => {
               console.error('Register error:', error)
          }
     })

     const onSubmit: SubmitHandler<RegisterFormSchema> = (data) => {
          registerMutation.mutate(data)
     }

     const generatedUsername = email ? generateUsername(email) : ''

     React.useEffect(() => {
          console.log('RegisForm rendered', registerMutation.data)
     }, [registerMutation])

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
                    {email && (
                         <p className="text-dark dark:text-light/80 text-xs">
                              Your username will be: <span className="font-medium">{generatedUsername}</span>
                         </p>
                    )}
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
                         type="password"
                         placeholder="Confirm Password"
                         showPassword={showConfirmPass}
                         onTogglePassword={handleToggleConfirmPass}
                         error={errors.passwordConfirmation}
                         {...register('passwordConfirmation')}
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
                         type="submit"
                         title={registerMutation.isLoading ? "Loading..." : "Register"}
                         disabled={registerMutation.isLoading}
                    />
                    <AuthBadgeButton />
               </div>
          </form>
     );
})

export default RegisForm;