import { Label, Textarea } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { AiTwotoneBell } from "react-icons/ai";
import milk from "@/assets/images/milk.png";
import poop from "@/assets/images/poop.png";
import shower from "@/assets/images/shower.png";
import sleep from "@/assets/images/sleep.png";
import { setTimeline } from "@/services/timeline";
const btnList = [
  { name: "poop", title: "배변", image: poop },
  { name: "milk", title: "분유", image: milk },
  { name: "sleep", title: "수면", image: sleep },
  { name: "shower", title: "목욕", image: shower },
];
export default function PushAlarm() {
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const submitHandler = () => {
    setTimeline({ content, category });
  };
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-gray-200 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <p className="text-2xl mb-4">
        <AiTwotoneBell className="inline mr-2" />
        기록하기
      </p>

      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-2 gap-4">
          {btnList.map((btn) => (
            <button
              onClick={() => setCategory(btn.name)}
              key={btn.name}
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="etc" value="Content" />
          </div>
          <Textarea
            id="etc"
            rows={2}
            value="없음"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
          />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
