import { NextResponse } from "next/server";
import { getFcmToken } from "@/services/pushAlarm";

export async function GET() {
  const token = await getFcmToken();

  return NextResponse.json(token, { status: 200 });
}
