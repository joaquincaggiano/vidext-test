import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from "../server";

export const serverClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/api/trpc`,
    }),
  ],
});
