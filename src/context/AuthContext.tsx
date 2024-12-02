import { z } from "zod";


export const loginFormSchema = z.object({
     email: z.string()
          .min(1, 'Email is required')
          .email('Invalid email format'),
     password: z.string()
          .min(8, 'Password must be at least 8 characters')
}).required()

export const registerFormSchema = z.object({
     email: z.string()
          .min(1, 'Email is required')
          .email('Invalid email format'),
     password: z.string()
          .min(8, 'Password must be at least 8 characters')
          .regex(/^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
               'Password must at least one number and one special character'),
     confirmPassword: z.string()
}).required().refine((data) => data.password === data.confirmPassword, {
     message: 'Passwords do not match',
     path: ['confirmPassword']
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>