import { NextRequest, NextResponse } from "next/server";
import * as authController from "@/controller/auth.ts";

type FailStatus = {
  message: string;
  status: number;
};

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const { accessToken, email, status } = await authController.login(data);
    return NextResponse.json({ accessToken, email }, { status: status });
  } catch (e) {
    return NextResponse.json(
      { message: (e as FailStatus).message },
      { status: (e as FailStatus).status }
    );
  }
}
