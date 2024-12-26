import { initTRPC, TRPCError } from "@trpc/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
const t = initTRPC.create();

const authMiddleware = t.middleware(async ({ ctx, next }) => {
  const session = await getServerSession(authOptions);
  console.log("SESSIOOOOOON:", session);

  if (!session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      ...ctx,
      session,
    },
  });
});
export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(authMiddleware);
