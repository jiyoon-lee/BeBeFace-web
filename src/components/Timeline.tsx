import Image from "next/image";
import React from "react";
import Milk from "@/assets/images/milk.png";
import ParentAvatar from "@/assets/images/parent_avatar.png";
import Poop from "@/assets/images/poop.png";
import Shower from "@/assets/images/shower.png";
import SitterAvatar from "@/assets/images/sitter_avatar.png";
import Sleep from "@/assets/images/sleep.png";
import { TimelineResponse } from "@/types";
import { millisecondsToKoreanTime } from "@/utils/millConvTime";

const categoryImg = "w-10 h-10";

export default function Timeline({
  date,
  role,
  content,
  category,
}: TimelineResponse) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {millisecondsToKoreanTime(date)}
      </time>
      <div className="items-center w-fit p-2.5 pr-4 bg-white border border-gray-200 rounded-lg shadow-sm flex dark:bg-gray-700 dark:border-gray-600">
        <div className="mr-3 shrink-0 flex flex-col justify-center items-center">
          <Image
            className="w-10 h-10 mb-3 rounded-full sm:mb-0"
            src={role === "ROLE_ADMIN" ? ParentAvatar : SitterAvatar}
            alt="avatar"
          />
          <span
            className={`${
              role === "ROLE_ADMIN"
                ? "bg-indigo-100 text-indigo-800 border-indigo-400"
                : "bg-yellow-100 text-yellow-800 border-yellow-300"
            } text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border`}
          >
            {role === "ROLE_ADMIN" ? "보호자" : "돌보미"}
          </span>
        </div>
        {["milk", "poop", "shower", "sleep"].includes(category) && (
          <div className="shadow-inner rounded-full p-1 bg-yellow-dark mx-2">
            {category === "milk" && (
              <Image src={Milk} className={categoryImg} alt="milk" />
            )}
            {category === "poop" && (
              <Image src={Poop} className={categoryImg} alt="poop" />
            )}
            {category === "shower" && (
              <Image src={Shower} className={categoryImg} alt="shower" />
            )}
            {category === "sleep" && (
              <Image src={Sleep} className={categoryImg} alt="sleep" />
            )}
          </div>
        )}
        <div>
          <div className="text-base font-normal text-gray-600 dark:text-gray-400">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
