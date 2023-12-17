import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

export const sendTokenToFlask = async (member_id?: number) => {
  return axios.post(
    "/sendToken",
    {
      memberId: member_id,
      token: getHeader().Authorization.split(" ")[1],
    },
    { headers: getHeader() }
  );
};

export const getAlbum = async (): Promise<string[]> => {
  return axios
    .get("/uploads", { headers: getHeader() })
    .then((res) => res.data);
};
