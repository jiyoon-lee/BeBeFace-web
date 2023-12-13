import { pushAlarm } from "./pushAlarm";
import { getHeader } from "@/utils/authorization";
import { fetcher } from "@/utils/fetcher";

type SetAttendance = {
  memberId: number;
  type: "go" | "leave";
};

/**
 * 돌보미 출근신청 API
 * @param memberId 돌보미의 ID
 * @returns
 */
export const setAttendance = async ({ memberId, type }: SetAttendance) => {
  pushAlarm(`돌보미가 ${type === "leave" ? "퇴근" : "출근"}했습니다.`);
  return await fetcher(
    `http://192.168.0.42:8080/attendance/record${
      type === "leave" ? "/leave" : ""
    }`,
    {
      method: "POST",
      headers: {
        ...getHeader(),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId,
      }),
    }
  );
};

export async function getAttendances(): Promise<SetAttendance[]> {
  return await fetcher("http://192.168.0.42:8080/attendance/record/list", {
    headers: {
      ...getHeader(),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
