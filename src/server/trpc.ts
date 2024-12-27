import { initTRPC, TRPCError } from "@trpc/server";
import { Session } from "next-auth";

type Context = {
  session: Session | null;
}

const t = initTRPC.context<Context>().create();

const authMiddleware = t.middleware(async ({ ctx, next }) => {

  console.log("ctx authMiddleware: ", ctx);

  if (!ctx.session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "No tienes acceso a esta operación"
    });
  }

  return next({ ctx });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(authMiddleware);
