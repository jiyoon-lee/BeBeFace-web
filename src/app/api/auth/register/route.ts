import { NextRequest, NextResponse } from "next/server";
import * as authController from "@/controller/auth";

type ErrorStatus = {
  status: number;
};
export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const result = await authController.signup(data);
    return NextResponse.json({ status: result.status });
  } catch (e) {
    return NextResponse.json(
      { message: `${data.name} already exists` },
      { status: (e as ErrorStatus).status }
    );
  }
}
