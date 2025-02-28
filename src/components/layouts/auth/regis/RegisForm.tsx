import React from "react";
import AuthBadgeButton from "../../../fragments/auth/AuthBadgeButton";
import Button from "../../../elements/buttons/Button.tsx";
import AuthInput from "../../../fragments/auth/AuthInput";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema, RegisterFormSchema } from "../../../../schema/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { googleAuth, registerAuth } from "../../../../services/authService.ts";
import { useAppDispatch } from "../../../../redux/hook.ts";
import { useNavigate } from "react-router-dom";
import { cleanAuthErrors, login, setIsAuthModalOpen } from "../../../../redux/slices/authSlice.ts";
import { handleApiError } from "../../../../hooks/errorHandler.ts";

interface RegisFormProps {
     showPassword: boolean;
     handleTogglePassword: VoidFunction;
     showConfirmPass: boolean;
     handleToggleConfirmPass: VoidFunction;
}

const RegisForm: React.FC<RegisFormProps> = React.memo(({
     showPassword,
     handleTogglePassword,
     showConfirmPass,
     handleToggleConfirmPass
}) => {
     const dispatch = useAppDispatch()
     const navigate = useNavigate()
     const queryClient = useQueryClient()
     const [isSubmitting, setIsSubmitting] = React.useState(false)

     const {
          reset,
          register,
          watch,
          handleSubmit,
          formState: { errors },
          setError
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
               queryClient.invalidateQueries(['user'])
               queryClient.invalidateQueries(['userAvatar'])
               dispatch(login({
                    token: data.jwt,
                    userId: data.user.id,
               }))
               dispatch(setIsAuthModalOpen(false))
               navigate('/dashboard')
          },
          onError: (error) => {
               handleApiError(error, setError, dispatch, 'register')
          }
     })

     const onSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
          if (isSubmitting) return
          setIsSubmitting(true)
          try {
               await registerMutation.mutateAsync(data)
          } catch (error) {
               console.error(error)
               setIsSubmitting(false)
          }
     }

     const handleGoogleRegister = React.useCallback(() => {
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
          handleGoogleRegister()
          return () => {
               queryClient.removeQueries(['user'])
               queryClient.removeQueries(['userAvatar'])
               dispatch(cleanAuthErrors())
          }
     }, [dispatch, queryClient, handleGoogleRegister])

     const generatedUsername = email ? generateUsername(email) : ''

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