import React from "react";
import AuthLayout from "./AuthLayout";
import Button from "../../elements/buttons/Button";
import AuthInput from "../../fragments/auth/AuthInput";
import AuthHeading from "../../fragments/auth/AuthHeading";
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { forgotPasswordAuth } from "../../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema, forgotPasswordSchema } from "../../../schema/AuthSchema";

interface ForgotPasswordProps {
     isAnimating: boolean;
     isModalOpen: boolean;
     isModalClose: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = React.memo(({
     isAnimating,
     isModalOpen,
     isModalClose
}) => {
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<ForgotPasswordSchema>({ resolver: zodResolver(forgotPasswordSchema) })

     const forgotPasswordMutation = useMutation({
          mutationFn: forgotPasswordAuth,
          onSuccess: (data) => {
               console.log('Forgot Password success:', data)
          },
          onError: (error) => {
               console.error('Forgot Password error:', error)
          }
     })

     const onSubmit = (data: ForgotPasswordSchema) => {
          forgotPasswordMutation.mutate(data)
     }

     return (
          <>
               <AuthLayout
                    isAnimating={isAnimating}
                    isModalClose={isModalClose}
                    isModalOpen={isModalOpen}
                    className="lg:min-h-[70vh] pb-20">
                    <AuthHeading title="Forgot Your Password?" />
                    <form onSubmit={handleSubmit(onSubmit)}
                         className="flex gap-y-8 flex-col w-full h-full max-w-60 items-center justify-center">
                         <div className="space-y-1">
                              <AuthInput
                                   icon={FaUser}
                                   type="email"
                                   placeholder="Enter Your Email Address"
                                   error={errors.email}
                                   {...register('email')}
                              />
                              <p className="text-dark dark:text-light/80 text-[12px] dark:font-extralight">
                                   <span className="text-red-600 text-xl mr-1">*</span>
                                   We will send you a message to set or reset your new password
                              </p>
                         </div>
                         <Button
                              isGradient
                              disabled={forgotPasswordMutation.isLoading}
                              type="submit"
                              title={forgotPasswordMutation.isLoading ? 'Loading...' : 'Submit'}
                              className="w-full"
                         />
                    </form>
               </AuthLayout>
          </>
     );
})

export default ForgotPassword;