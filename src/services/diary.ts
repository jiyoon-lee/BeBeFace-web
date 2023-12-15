import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

type Props = {
  file?: File;
  title: string;
  content: string;
};
export async function getDiaries(date: string) {
  return axios
    .get(`/timeline?date=${date}`, {
      headers: getHeader(),
    })
    .then(console.log);
}

export async function setDiary({ file, title, content }: Props) {
  return axios
    .post(
      "/diary",
      {
        file,
        title,
        content,
      },
      {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" },
      }
    )
    .then(console.log);
}
