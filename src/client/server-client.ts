import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from "../server";

export const serverClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
