import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from "../server";

export const serverClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.DATABASE_URL}/api/trpc`,
    }),
  ],
});
