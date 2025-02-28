import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../server/prisma";
import { UserSchema } from "../../../../zod/user";
import bcrypt from "bcrypt";
import { getUserData } from "../../../../server/getUserData"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received data:", body);

    const parsedData = UserSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { 
          message: "Validation failed", 
          errors: parsedData.error.issues.map(issue => ({
            field: issue.path.join("."),
            message: issue.message
          })) 
        },
        { status: 400 }
      );
    }

    const data = parsedData.data;

    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const user = await prisma.user.create({
      data: {
        firstName: data.firstName ?? null,
        lastName: data.lastName ?? null,
        email: data.email,
        password: hashedPassword,
        provider: data.provider ?? null,
        dateOfBirth: data.dateOfBirth ?? null,
        gender: data.gender ?? null,
        country: data.country ?? null,
        handicap: data.handicap ?? null,
        phoneNumber: data.phoneNumber ?? null,
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user: ", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const user = await getUserData();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
