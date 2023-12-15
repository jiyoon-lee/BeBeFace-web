import { NextResponse } from "next/server";
import { axios } from "@/utils/axios";

export async function pushAlarm(content: string) {
  try {
    const token =
      "fTfC6-UQTVyVX2nadpLjz8:APA91bFy65o_CpH3B9dBZw_Sycw5rc4IEa4DSsHQpQo_4U2_kB9jdP6uMTIK0GDO2FAsiijfFhkDKCSRXl4qfBpGhmozMJ2ajtopbWeQbMfIs3qW3DTpOB1zGZrsj9zp1jfCqZvR5O9u";
    const key =
      "key=AAAAANVh6Cc:APA91bGmXsYiCNSKedtF_5TJhNcLTXZKi9ifM5XQ9dgft15zWP6bE10U9QslW6wNYxmsXS_4VVBrNgsGvg7teyRAR3xRVNhp3ZrdUGz72ofuL_hRv9gBDbeOdOEWsnBzJmOODGZRoHU9";
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
            Authorization: key,
          },
        }
      );
    } else throw new Error(token);
  } catch (e) {
    NextResponse.json(e, { status: 500 });
  }
}
