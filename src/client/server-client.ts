import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from "../server";

export const serverClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "ep-super-grass-a45t03v0-pooler.us-east-1.aws.neon.tech/api/trpc",
    }),
  ],
});
