import Image from "next/image";
import React from "react";
import ParentAvatar from "@/assets/images/parent_avatar.png";
import SitterAvatar from "@/assets/images/sitter_avatar.png";

type Props = {
  content: {
    date: string;
    author: string;
    content: string;
  };
};

export default function Timeline({
  content: { date, author, content },
}: Props) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <div className="items-center w-fit p-2 pr-4 bg-white border border-gray-200 rounded-lg shadow-sm flex dark:bg-gray-700 dark:border-gray-600">
        <Image
          className="w-10 h-10 mb-3 me-3 rounded-full sm:mb-0"
          src={author === "parent" ? ParentAvatar : SitterAvatar}
          alt="avatar"
        />
        <div>
          <div className="text-base font-normal text-gray-600 dark:text-gray-400">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
