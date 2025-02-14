import React from "react";
import Button from "../../elements/buttons/Button";
import AuthInput from "../../fragments/auth/AuthInput";
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { forgotPasswordAuth } from "../../../services/authService.ts";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema, forgotPasswordSchema } from "../../../schema/AuthSchema";
import AuthModal from "./AuthModal.tsx";
import { useAppDispatch } from "../../../redux/hook.ts";
import { setIsAuthModalOpen } from "../../../redux/slices/authSlice.ts";

interface ForgotPasswordProps {
     isAnimating: boolean;
     isModalOpen: boolean;
     isModalClose: VoidFunction;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = React.memo(({
     isAnimating,
     isModalOpen,
     isModalClose
}) => {
     const dispatch = useAppDispatch()

     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm<ForgotPasswordSchema>({ resolver: zodResolver(forgotPasswordSchema) })

     const forgotPasswordMutation = useMutation({
          mutationFn: forgotPasswordAuth,
          onSuccess: () => {
               setTimeout(() => {
                    dispatch(setIsAuthModalOpen(false))
               }, 1000);
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
               <AuthModal
                    title="Forgot Your Password?"
                    isOpen={isModalOpen}
                    onClose={isModalClose}
                    isAnimating={isAnimating}
                    className="lg:min-h-[28rem]">
                    <form onSubmit={handleSubmit(onSubmit)}
                         className="flex gap-y-8 flex-col w-full h-full max-w-60 items-center justify-center pt-2">
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
                              isGold
                              disabled={forgotPasswordMutation.isLoading}
                              type="submit"
                              title={forgotPasswordMutation.isLoading ? 'Loading...' : 'Submit'}
                              className="w-full"
                         />
                    </form>
               </AuthModal>
          </>
     );
})

export default ForgotPassword;