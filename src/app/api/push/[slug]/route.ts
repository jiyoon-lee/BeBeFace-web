import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  if (params?.slug) {
    switch (params.slug) {
      case "smile":
        console.log("아이가 웃습니다.");
        break;
      case "back":
        console.log("아기가 위험합니다.");
        break;
      case "cry":
        console.log("아기가 웁니다.");
        break;
      default:
        console.log("nothing...");
    }
  }
  return NextResponse.json("나도 집가고싶두");
}
