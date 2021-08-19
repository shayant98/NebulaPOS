import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
export default NextAuth({
  // Configure one or more authentication providers
  providers: [],

  // A database is optional, but required to persist accounts in a database
  //   adapter: PrismaAdapter(prisma),
});
