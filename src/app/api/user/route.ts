import { NextResponse, NextRequest} from "next/server";
import prisma from "../../../server/prisma";

export async function POST(req: NextRequest) {
        const data = await req.json()
        console.log(data)
        const user = await prisma.user.create(data);
        return NextResponse.json(data)
}
