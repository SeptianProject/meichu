import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import AuthInput from "../../../fragments/auth/AuthInput.tsx";
import AuthButton from "../../../fragments/auth/AuthButton.tsx";
import AuthBadgeButton from "../../../fragments/auth/AuthBadgeButton.tsx";
import React from "react";
import ForgotPasswordBtn from "../../../elements/buttons/ForgotPaswordBtn.tsx";
import { loginFormSchema, LoginFormSchema } from "../../../../context/AuthContext.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginFormProps {
     showPassword: boolean;
     handleTogglePassword: () => void;
     onProfile: () => void;
     onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
     showPassword,
     handleTogglePassword,
     onProfile,
     onForgotPassword
}) => {
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<LoginFormSchema>({ resolver: zodResolver(loginFormSchema) })

     const onSubmit = (data: LoginFormSchema) => {
          console.log('Login data:', data);
          onProfile()
     }

     return (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
               <div className="flex flex-col items-end gap-y-2">
                    <AuthInput
                         icon={FaUser}
                         type="email"
                         placeholder="Your Email"
                         {...register('email')}
                    />
                    {errors.email && (
                         <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                    <AuthInput
                         icon={IoIosLock}
                         type="password"
                         placeholder="Password"
                         showPassword={showPassword}
                         onTogglePassword={handleTogglePassword}
                         {...register('password')}
                    />
                    {errors.password && (
                         <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                    <ForgotPasswordBtn onClick={onForgotPassword} />
               </div>
               <AuthButton text="Login" type="submit" />
               <AuthBadgeButton />
          </form>
     );
}

export default LoginForm;