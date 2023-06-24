import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type AuthOptions } from "next-auth";
import bcryptjs from "bcryptjs";
import prisma from "@/app/libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email == null ||
          credentials?.password === "" ||
          credentials?.password == null
        )
          throw new Error("Invalid credentials");
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (
          user == null ||
          user?.hashedPassword === "" ||
          user?.hashedPassword == null
        )
          throw new Error("Invalid credentials");
        const isCorrectPassword = await bcryptjs.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) throw new Error("Invalid credentials");
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
