import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    await fs.writeFile("src/assets/token.txt", token);
    return NextResponse.json(null, { status: 200 });
  } catch (e) {
    return NextResponse.json(null, { status: 500 });
  }
}
