import { z } from "zod";

export const loginFormSchema = z.object({
     identifier: z.string()
          .min(5, 'Identifier is required')
          .email('Invalid email format'),
     password: z.string()
          .min(5, 'Password must be at least 5 characters')
}).required()

export const registerFormSchema = z.object({
     email: z.string()
          .min(1, 'Email is required')
          .email('Invalid email format'),
     password: z.string()
          .min(5, 'Password must be at least 5 characters'),
     username: z.string()
          .min(1, 'Username is required'),
}).required()

export const forgotPasswordSchema = z.object({
     email: z.string()
          .min(1, 'Email is required')
          .email('Invalid email format')
})

export const resetPasswordSchema = z.object({
     code: z.string()
          .min(1, 'Code is required'),
     password: z.string()
          .min(5, 'Password must be at least 5 characters'),
     confirmPassword: z.string()
}).refine(data => data.confirmPassword === data.password, {
     message: 'Passwords do not match',
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>