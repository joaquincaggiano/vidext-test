import { db } from "@/db";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import { users, videos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const userRouter = router({
  getUserByEmail: publicProcedure.input(z.string().email()).query(async ({ input }) => {
    const user = await db.select().from(users).where(eq(users.email, input));
    return user;
  }),
  getUser: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.session.user?.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const user = await db.select().from(users).where(eq(users.id, ctx.session.user.id));
    return user;
  }),
  getUserVideos: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.session.user?.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const userVideos = await db.select().from(videos).where(eq(videos.userId, ctx.session.user.id));

    return userVideos;
  }),
  createUser: publicProcedure.input(z.object({
    email: z.string().email(),
  })).mutation(async ({ ctx, input }) => {
    const user = await db.insert(users).values({
      email: input.email,
    });
    return user;
  }),
  updateUser: protectedProcedure.input(z.object({
    id: z.string(),
    email: z.string().email(),
    name: z.string(),
  })).mutation(async ({ ctx, input }) => {
    const user = await db.update(users).set({
      email: input.email,
      name: input.name,
    }).where(eq(users.id, input.id));
    return user;
  }),
});
