import { z } from "zod";

export const createProductSchema = z.object({
     uuid: z.string().uuid(),
     user: z.string(),
     name: z.string(),
     productType: z.string(),
     references: z.number(),
     imvu: z.boolean()
})

export type CreateProductSchema = z.infer<typeof createProductSchema>