import { axios } from "@/utils/axios";

export async function setAttendance() {
  const token = localStorage.getItem("token");
  return axios
    .get("/attendance", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(console.log);
}
