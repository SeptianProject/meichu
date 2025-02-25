import { z } from "zod";

export const createProductSchema = z.object({
     uuid: z.string(),
     user: z.number(),
     name: z.string().min(1, "Name is required"),
     productType: z.string().min(1, "Product type is required"),
     references: z.number().nullable(),
     imvu: z.boolean().optional(),
     custom_categories: z.array(z.string()).min(1, "Category is required"),
})

export type CreateProductSchema = z.infer<typeof createProductSchema>