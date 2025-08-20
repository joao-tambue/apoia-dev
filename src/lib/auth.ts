import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GitHub from "next-auth/providers/github"
import { prisma } from "./prisma"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET!,
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
})