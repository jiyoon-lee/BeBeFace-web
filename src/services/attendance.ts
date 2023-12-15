import { pushAlarm } from "./pushAlarm";
import { AttendanceResponse } from "@/types";
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

export const mapAttendances = (arr: AttendanceResponse[]) => {
  const result = arr.map(({ member, id, attendance, leaveTime }) => {
    return {
      name: member.name,
      email: member.email,
      id: id,
      isGo: areArraysEqual(attendance, leaveTime),
      date: transDate(leaveTime),
    };
  });
  return result.reverse();
};
const transDate = (leaveTime: number[]) => {
  return `${leaveTime[0]}년 ${leaveTime[1]}월 ${leaveTime[2]}일 ${
    leaveTime[3] > 12
      ? "PM " +
        (leaveTime[3] - 12 < 10 ? "0" + (leaveTime[3] - 12) : leaveTime[3] - 12)
      : "AM " + (leaveTime[3] < 10 ? "0" + leaveTime[3] : leaveTime[3])
  }:${leaveTime[4] < 10 ? "0" + leaveTime[4] : leaveTime[4]}:${
    leaveTime[5] < 10 ? "0" + leaveTime[5] : leaveTime[5]
  }`;
};
const areArraysEqual = (goArr: number[], leaveArr: number[]) => {
  // 두 배열의 길이가 다르면 동일하지 않다고 판단
  if (goArr.length !== leaveArr.length) {
    return false;
  }

  // 각 요소를 순회하면서 비교
  for (let i = 0; i < goArr.length; i++) {
    if (goArr[i] !== leaveArr[i]) {
      return false;
    }
  }

  // 모든 요소가 일치하면 동일한 배열로 판단
  return true;
};
