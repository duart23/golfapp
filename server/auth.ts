import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "../server/prisma";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
      },
      providers: [
        Credentials({
          credentials: {
            email: {},
            password: {},
          },
          async authorize(credentials, req) {
            const user = await prisma.user.findUnique({
              where: {
                email: credentials?.email ?? "",
              },
            });
    
            if (!user) {
              return null;
            }
    
            if (!credentials) {
              return null;
            }
    
            const passwordMatch = await bcrypt.compare(
              credentials.password || "",
              user.password || ""
            );
    
            console.log({ passwordMatch });
    
            if (passwordMatch) {
              return {
                id: user.id.toString(),
                email: user.email,
              };
            } else {
              return null;
            }
          },
        }),
      ],
      callbacks: {
        async session({ session, token }) {
          if (token) {
            session.user = {email: token.email };
          }
          return session;
        },
        async jwt({ token, user }) {
          if (user) {
            token.email = user.email;
          }
          return token;
        },
        async redirect({ url, baseUrl }) {
          console.log("Redirecting to:", url);
          return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`;
        },
      },
      secret: process.env.NEXTAUTH_SECRET,
    };