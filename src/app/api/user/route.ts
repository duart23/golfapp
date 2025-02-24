import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../server/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data || typeof data !== "object") {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    console.log("Received data:", data);

    const user = await prisma.user.create({
      data: {
        firstName: data.firstName ?? null,
        lastName: data.lastName ?? null,
        email: data.email,
        password: data.password,
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
