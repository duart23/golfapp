import { NextRequest, NextResponse } from "next/server";
import { getGameData } from "../../../../server/getGameData";
import {prisma} from "../../../../server/prisma";

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const userId = searchParams.get("userId");


    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const games = await getGameData(Number(userId));

    return NextResponse.json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received data:", body);

    const game = await prisma.game.create({
      data: {
        userId: body.userId,
        courseName: body.courseName,
        location : body.location,
        parTotal : body.parTotal,
        holePars : body.HolePars,
        holeScores : body.holeScores,
        courseRating : body.courseRating,
        score : body.score,
        date : body.date,
      },
    });
    return NextResponse.json(game, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating user: ", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}