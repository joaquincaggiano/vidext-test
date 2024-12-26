export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/video/:path*", "/upload/:path*", "/user:path*"],
};
