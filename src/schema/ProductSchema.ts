import { z } from "zod";

export const createProductSchema = z.object({
     uuid: z.string(),
     user: z.number(),
     name: z.string().min(1, "Name is required"),
     productType: z.string(),
     references: z.number().nullable(),
     imvu: z.boolean()
})

export type CreateProductSchema = z.infer<typeof createProductSchema>