import { NextRequest, NextResponse } from "next/server";
import { isAuth } from "@/middleware/auth";

export async function GET(req: NextRequest) {
  try {
    const user = await isAuth(req);
    const { name, email, role } = user;
    return NextResponse.json({
      status: 200,
      name,
      email,
      role,
    });
  } catch (e) {
    return NextResponse.json(e);
  }
}
