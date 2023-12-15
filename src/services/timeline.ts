import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

type Props = {
  memberId: number;
  content: string;
  category: string;
};
export async function getTimeline(date: string) {
  return axios
    .get(`/timelines?date=${date}`, {
      headers: getHeader(),
    })
    .then((res) => res.data.reverse());
}

export async function setTimeline({ memberId, content, category }: Props) {
  return axios
    .post(
      "/timeline",
      {
        memberId,
        content,
        category,
      },
      {
        headers: getHeader(),
      }
    )
    .then(console.log);
}
