import NextAuth, { DefaultSession, Session } from "next-auth"
import { JWT } from "next-auth/jwt";

interface User {
  id: string
  email: string
}

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: User
  }
}