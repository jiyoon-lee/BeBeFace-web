import { NextRequest, NextResponse } from "next/server";
import { pushAlarm } from "@/services/pushAlarm";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  let content = "문제가 발생했습니다.";
  if (params?.slug) {
    switch (params.slug) {
      case "smile":
        content = "웃음이 감지되었습니다. 앨범을 확인해주세요.";
        break;
      case "back":
        content = "뒷통수가 감지되었습니다. 아기를 확인해주세요";
        break;
      case "cry":
        content = "지속적인 울음이 감지되었습니다. 돌보미에게 연락해보세요";
        break;
      default:
        content = `${params.slug}는 잘못된 접근입니다.`;
    }
    await pushAlarm(content);
  }

  return NextResponse.json(content);
}
