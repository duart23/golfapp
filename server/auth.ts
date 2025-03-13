import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import compare from "bcrypt";
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
    
            const passwordMatch = await compare.compare(
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
        async redirect({ url, baseUrl }) {
          console.log("Redirecting to:", url);
          return url.startsWith(baseUrl) ? url : baseUrl + "/loggedin";
        },
      },
      secret: process.env.NEXTAUTH_SECRET,
    };