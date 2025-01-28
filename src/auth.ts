import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserInfo } from "./types/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        if (!credentials) return null;

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const resData = await response.json();

          if (!response.ok || !resData.status) {
            throw new Error(resData.message || "Login failed");
          }

          return {
            email: resData.userData.email,
            fullName: resData.userData.fullName,
            industry: resData.userData.industry,
            profession: resData.userData.profession,
            token: resData.token,
            id: resData.userData.id,
          } as UserInfo;
        } catch (error: any) {
          console.log("auth.ts:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    async signIn({ user }) {
      if (user) return true;
      return false;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...session.user,
          ...token.user,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
