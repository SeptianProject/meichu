import { z } from "zod";

export const createProductSchema = z.object({
     uuid: z.string(),
     user: z.number(),
     name: z.string().min(1, "Name is required"),
     productType: z.string().min(1, "Product type is required"),
     references: z.number({ required_error: "Image reference is required" }),
     imvu: z.boolean({ required_error: "IMVU status is required" }),
     custom_categories: z.array(z.string()).min(1, "At least one category is required"),
}).refine((data) => {
     if (data.productType === 'Single' || data.productType === 'Bundle') {
          return data.custom_categories && data.custom_categories.length > 0;
     }
     return true;
}, {
     message: "Category is required for Single or Bundle product types",
     path: ["custom_categories"]
})

export const updateProductSchema = z.object({
     uuid: z.string().optional(),
     user: z.number().optional(),
     name: z.string().min(1, "Name is required").optional(),
     productType: z.string().min(1, "Product type is required").optional(),
     references: z.number().nullable().optional(),
     imvu: z.boolean().optional(),
     custom_categories: z.array(z.string()).min(1, "At least one category is required").optional(),
}).refine((data) => {
     if (data.productType === 'Single' || data.productType === 'Bundle') {
          return data.custom_categories && data.custom_categories.length > 0;
     }
     return true;
}, {
     message: "Category is required for Single or Bundle product types",
     path: ["custom_categories"]
})

export type CreateProductSchema = z.infer<typeof createProductSchema>
export type UpdateProductSchema = z.infer<typeof updateProductSchema>