import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
import Okta from "next-auth/providers/okta";
// import { PrismaClient } from "@prisma/client";
// import { PrismaAdapter } from "@auth/prisma-adapter";

// const prisma = new PrismaClient();
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Okta],
  // adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: "/signin"
  // }
});
