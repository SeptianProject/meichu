import React from "react";
import AuthModal from "./AuthModal.tsx";
import Button from "../../elements/buttons/Button";
import AuthInput from "../../fragments/auth/AuthInput";
import ModalInformation from "../modal/ModalInformation.tsx";
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { forgotPasswordAuth } from "../../../services/authService.ts";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema, forgotPasswordSchema } from "../../../schema/AuthSchema";
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
     const [isInformModalOpen, setIsInformModalOpen] = React.useState(false)
     const [shouldCloseAuthModal, setShouldCloseAuthModal] = React.useState(false)

     const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm<ForgotPasswordSchema>({
          resolver: zodResolver(forgotPasswordSchema),
          defaultValues: { email: '' }
     })

     const forgotPasswordMutation = useMutation({
          mutationFn: forgotPasswordAuth,
          onSuccess: () => {
               reset()
               setIsInformModalOpen(true)
               setShouldCloseAuthModal(true)
          },
          onError: (error) => {
               console.error('Forgot Password error:', error)
          }
     })

     const onSubmit = (data: ForgotPasswordSchema) => {
          forgotPasswordMutation.mutate(data)
     }

     const handleCloseInformModal = () => {
          dispatch(setIsAuthModalOpen(false))
          window.open('https://mail.google.com', '_blank')
     }

     React.useEffect(() => {
          if (shouldCloseAuthModal) {
               setShouldCloseAuthModal(false)
          }
     }, [shouldCloseAuthModal, dispatch])

     const handleCloseAuthModal = () => {
          if (!isInformModalOpen) {
               isModalClose()
          }
     }

     return (
          <>
               <ModalInformation
                    isOpen={isInformModalOpen}
                    onClose={handleCloseInformModal}
                    title="We’ve Sent You an Email!"
                    message="We've sent a password reset link to your email. Please check your inbox (and spam folder) and follow the instructions to create a new password."
                    buttonText="Open Email"
                    className="z-40"
               />
               <AuthModal
                    title="Forgot Your Password?"
                    isOpen={isModalOpen && !isInformModalOpen}
                    onClose={handleCloseAuthModal}
                    isAnimating={isAnimating}
                    className="pb-20">
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
                              isWidthFull
                              type="submit"
                              disabled={forgotPasswordMutation.isLoading}
                              title={forgotPasswordMutation.isLoading ? 'Loading...' : 'Submit'}
                         />
                    </form>
               </AuthModal>
          </>
     );
})

export default ForgotPassword;