import { router } from "./trpc";
import { videoRouter } from "./routers/video";
import { userRouter } from "./routers/user";

export const appRouter = router({
  video: videoRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;

