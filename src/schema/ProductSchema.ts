import { z } from "zod";

export const createProductSchema = z.object({
     uuid: z.string().uuid(),
     user: z.number(),
     name: z.string(),
     productType: z.enum(['Single', 'Bundle']),
     references: z.number(),
     imvu: z.boolean()
})

export type CreateProductSchema = z.infer<typeof createProductSchema>