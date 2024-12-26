import { z } from "zod";

export const videoSchema = z.object({
  userId: z.string(),
  title: z
    .string()
    .min(3, { message: "El título debe tener al menos 3 caracteres" }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
});

export const videoWithUrlSchema = videoSchema.extend({
  s3Url: z.string(),
});

export type Video = z.infer<typeof videoSchema>;
