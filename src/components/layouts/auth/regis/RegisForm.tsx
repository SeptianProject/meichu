import AuthButton from "../../../fragments/auth/AuthButton";
import AuthBadgeButton from "../../../fragments/auth/AuthBadgeButton";
import AuthInput from "../../../fragments/auth/AuthInput";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import React from "react";
import RegisTextDesc from "./RegisTextDesc";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema, RegisterFormSchema } from "../../../../context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { registerAuth } from "../../../../services/AuthService";

interface RegisFormProps {
     showPassword: boolean;
     handleTogglePassword: () => void;
     showConfirmPass: boolean;
     handleToggleConfirmPass: () => void;
     onLogin: () => void;
}

const RegisForm: React.FC<RegisFormProps> = ({
     showPassword,
     handleTogglePassword,
     showConfirmPass,
     handleToggleConfirmPass,
     onLogin
}) => {
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

     const registerMutation = useMutation({
          mutationFn: registerAuth,
          onSuccess: (data) => {
               localStorage.setItem('authToken', data.jwt)
          },
          onError: (error) => {
               console.log('Register error:', error)
               alert('Register error')
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
                    <RegisTextDesc />
               </div>
               <div className="space-y-5">
                    <AuthButton text="Register" type="submit" />
                    <AuthBadgeButton />
               </div>
          </form>
     );
}

export default RegisForm;