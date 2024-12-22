import { videos } from "@/db/schema";
import { publicProcedure } from "../trpc";
import { db } from "@/db";
import { router } from "../trpc";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const videoRouter = router({
  videoList: publicProcedure.query(async () => {
    const allVideos = await db.select().from(videos);

    return allVideos;
  }),
  videoById: publicProcedure.input(z.coerce.number()).query(async (opts) => {
    const { input } = opts;
    const video = await db.select().from(videos).where(eq(videos.id, input));
    return video;
  }),
  createVideo: publicProcedure
    .input(
      z.object({
        title: z
          .string()
          .min(3, { message: "El título debe tener al menos 3 caracteres" }),
        description: z
          .string()
          .min(10, {
            message: "La descripción debe tener al menos 10 caracteres",
          }),
        s3Url: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const video = await db
        .insert(videos)
        .values({ ...input, views: 0, likes: 0 });
      return video;
    }),
  updateVideo: publicProcedure
    .input(
      z.object({
        id: z.number(),
        views: z.number(),
        likes: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const video = await db
        .update(videos)
        .set(input)
        .where(eq(videos.id, input.id));
      return video;
    }),
});
