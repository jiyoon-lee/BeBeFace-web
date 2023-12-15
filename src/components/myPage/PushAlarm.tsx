import { Label, Textarea } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import milk from "@/assets/images/milk.png";
import poop from "@/assets/images/poop.png";
import shower from "@/assets/images/shower.png";
import sleep from "@/assets/images/sleep.png";
import { useAlertState } from "@/context/AlertContext";
import { useLoadingState } from "@/context/LoadingContext";
import { useUserState } from "@/context/UserContext";
import { pushAlarm } from "@/services/pushAlarm";
import { setTimeline } from "@/services/timeline";

const btnList = [
  { name: "poop", title: "배변", image: poop },
  { name: "milk", title: "분유", image: milk },
  { name: "sleep", title: "수면", image: sleep },
  { name: "shower", title: "목욕", image: shower },
];
export default function PushAlarm() {
  const { setIsLoading } = useLoadingState();
  const { setAlert } = useAlertState();
  const { user } = useUserState();
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    let content = "";
    switch (category) {
      case "milk":
        content = "아이가 밥을 먹습니다.";
        break;
      case "poop":
        content = "아이가 배변 했어요.";
        break;
      case "sleep":
        content = "아이가 잠에 들었어요.";
        break;
      case "shower":
        content = "아이가 목욕을 했어요.";
        break;
      default:
        content = "선택된 카테고리가 없습니다.";
    }
    pushAlarm(content);
    if (user) {
      setTimeline({ memberId: user.memberId, content, category })
        .then(() => {
          setAlert({ type: "success", message: "타임라인이 등록되었습니다." });
          setCategory("");
          setContent("");
        })
        .catch(() => {
          setAlert({
            type: "danger",
            message: "타임라인 등록에 실패하였습니다.",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-10 bg-white border-gray-300 border-2 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <form onSubmit={submitHandler} className="flex justify-between divide-x">
        <div className="grid grid-cols-2 gap-4 w-1/2 p-7">
          {btnList.map((btn) => (
            <button
              onClick={() => setCategory(btn.name)}
              key={btn.name}
              type="button"
              className={`${
                category === btn.name
                  ? "bg-yellow-light hover:bg-[#FFEFCA] focus:ring-yellow-dark border-yellow-dark"
                  : "bg-white hover:bg-gray-100 focus:ring-gray-100 border-gray-200"
              } border focus:ring-4 text-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}
            >
              <Image
                width={40}
                src={btn.image}
                alt="alarm button icon"
                className="mr-3"
              />
              {btn.title}
            </button>
          ))}
        </div>
        <div className="w-1/2 p-7">
          <div className="mb-2 block">
            <Label htmlFor="etc" value="아이의 행동을 입력해요." />
          </div>
          <Textarea
            id="etc"
            rows={2}
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
          />
          <button
            disabled={!(content && category)}
            type="submit"
            className={`${
              content && category
                ? "bg-yellow-dark hover:bg-yellow-deepDark"
                : "bg-gray-300"
            } text-white mt-2.5 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}
