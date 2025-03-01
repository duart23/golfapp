import { prisma } from "./prisma";

export async function getGameData(userId: number) {
  if (!userId) {
    throw new Error("User ID is required to fetch game data.");
  }
  const games = await prisma.game.findMany({
    where: { userId: userId },
    select: {
      id: true,
      courseName: true,
      location: true,
      numberOfHoles: true,
      parTotal: true,
      courseRating: true,
      score: true,
      holePars: true,
      date: true,
    },
  });

  // console.log("Games found:", games); // ✅ Debug log

  return games;
}
