import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

export async function setAttendance() {
  return axios
    .get("/attendance", {
      headers: getHeader(),
    })
    .then(console.log);
}
