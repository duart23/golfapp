import { NextRequest, NextResponse } from "next/server";
import { getGameData } from "../../../../server/getGameData";

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const userId = searchParams.get("userId");


    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const games = await getGameData(Number(userId));

    // console.log("Fetched games:", games); // ✅ Debug log

    return NextResponse.json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
