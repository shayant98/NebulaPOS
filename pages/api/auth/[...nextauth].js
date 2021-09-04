import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const prisma = new PrismaClient();
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: "Credentials",
      async authorize(credentials, req) {
        const user = await prisma.users.findFirst({
          where: {
            username: credentials.username,
            password: credentials.password,
          },
        });
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],

  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // Add access_token to the token right after signin
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
