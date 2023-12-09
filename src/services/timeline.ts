import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

type Props = {
  content: string;
  category: string;
};
export async function setTimeline({ content, category }: Props) {
  return axios
    .post(
      "/timeline",
      {
        memberId: 3,
        content,
        category,
      },
      {
        headers: getHeader(),
      }
    )
    .then(console.log);
}
