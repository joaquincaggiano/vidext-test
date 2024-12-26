import { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import type { Adapter } from "next-auth/adapters";
import { sendMail } from "@/services/mail";
import { APP_NAME } from "@/constants/app-name";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { htmlTemplate } from "@/utils/email-template";
import { serverClient } from "@/client/server-client";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM_ADDRESS,
      async sendVerificationRequest({
        identifier: email,
        url,
        // provider: { server, from },
      }) {
        const subject = `Iniciar sesión en ${APP_NAME}`;
        const html = htmlTemplate(
          "Verificar correo electrónico",
          `<div style="width: 300px; margin-bottom: 20px; text-align: center;">
            Haz click en el siguiente botón para iniciar sesión en ${APP_NAME}
          </div>

          <a style="padding: 10px; background-color: #000000; border-radius: 12px; color: #FFF; text-decoration: none;" href="${url}">
            Iniciar sesión
          </a>`
        );

        try {
          await sendMail(email, subject, html);
        } catch (error) {
          console.error("Error sending verification email:", error);
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/signIn",
    verifyRequest: "/auth/verifyRequest",
    error: "/auth/error",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // const typedUser = user as User;
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.email = user.email;
      }
      return session;
    },

    async signIn({ user }) {
      if (user.email == null) return false;

      const userDb = await serverClient.user.getUserByEmail.query(user.email);

      if (!userDb) {
        serverClient.user.createUser.mutate({
          email: user.email,
        });
      }

      return true;
    },
  },
};
