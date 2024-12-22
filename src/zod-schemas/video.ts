import { z } from "zod";

export const videoSchema = z.object({
  title: z.string().min(3, { message: "El título debe tener al menos 3 caracteres" }),
  description: z.string().min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  video: z.instanceof(File).refine((file) => file.type.startsWith("video/"), {
    message: "El archivo debe ser un video",
  }),
});

export type Video = z.infer<typeof videoSchema>;
