import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

// esto nos faltaba, hay que exportar métodos con nombre GET y POST (next 13)
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
