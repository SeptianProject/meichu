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

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>