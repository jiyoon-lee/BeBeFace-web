import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

type Props = {
  name: string;
  birth: string;
  etc: string;
  memberId: number;
};
export async function addBaby(data: Props) {
  return axios.post("/baby", data, {
    headers: getHeader(),
  });
}
