import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  let comment = "문제가 발생했습니다.";
  if (params?.slug) {
    switch (params.slug) {
      case "smile":
        comment = "웃음이 감지되었습니다. 앨범을 확인해주세요.";
        break;
      case "back":
        comment = "아기가 위험합니다.";
        break;
      case "cry":
        comment = "아기가 웁니다.";
        break;
      default:
        comment = `${params.slug}는 잘못된 접근입니다.`;
    }
  }
  return NextResponse.json(comment);
}
