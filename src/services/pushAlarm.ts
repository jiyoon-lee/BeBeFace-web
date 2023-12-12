import { NextResponse } from "next/server";
import { axios } from "@/utils/axios";

export async function pushAlarm(content: string) {
  console.log("service까지 들어옴", content);
  console.log(
    "NEXT_PUBLIC_FCM_DEVICE_TOKEN",
    process.env.NEXT_PUBLIC_FCM_DEVICE_TOKEN
  );
  console.log(
    "NENT_PUBLIC_FCM_SERVER_KEY",
    process.env.NENT_PUBLIC_FCM_SERVER_KEY
  );
  try {
    const token = process.env.NEXT_PUBLIC_FCM_DEVICE_TOKEN;
    if (token) {
      return axios.post(
        "https://fcm.googleapis.com/fcm/send",
        {
          to: token,
          notification: {
            body: content,
            title: "BeBeFace에서 알림이 도착했습니다.",
          },
        },
        {
          headers: {
            Authorization: `key=${process.env.NENT_PUBLIC_FCM_SERVER_KEY}`,
          },
        }
      );
    } else throw new Error(token);
  } catch (e) {
    NextResponse.json(e, { status: 500 });
  }
}
