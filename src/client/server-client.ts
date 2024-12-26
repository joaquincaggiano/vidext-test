import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from "../server";

export const serverClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "https://vidext-hub.up.railway.app/api/trpc",
    }),
  ],
});
