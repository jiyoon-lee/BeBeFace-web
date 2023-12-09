import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

export async function setAttendanceGo(memberId: number) {
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
