import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import {prisma} from "./prisma";


export async function getUserData()
{
    const session = await getServerSession(authOptions);

    if(!session?.user?.email){
        throw new Error("User is not logged in");
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          gender: true,
          country: true,
          handicap: true,
        },
      });

      return user;
}
