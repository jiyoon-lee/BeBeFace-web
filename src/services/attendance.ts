import { pushAlarm } from "./pushAlarm";
import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

export async function setAttendanceGo(memberId: number) {
  pushAlarm("돌보미가 출근했습니다.");
  return axios
    .post(
      "/attendance/record",
      {
        memberId,
      },
      {
        headers: getHeader(),
      }
    )
    .then(console.log);
}

export async function setAttendanceLeave(memberId: number) {
  pushAlarm("돌보미가 퇴근했습니다.");
  return axios
    .post(
      "/attendance/record/leave ",
      {
        memberId,
      },
      {
        headers: getHeader(),
      }
    )
    .then(console.log);
}

export async function getAttendances() {
  return axios
    .get("/attendance/record/list", {
      headers: getHeader(),
    })
    .then(console.log);
}
