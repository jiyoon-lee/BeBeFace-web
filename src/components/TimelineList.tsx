import React from "react";
import Timeline from "./Timeline";

type Prop = {
  time: string;
};
export default function TimelineList({ time }: Prop) {
  const list = [
    {
      id: 1,
      date: time,
      author: "parent",
      content: "우리아기가 오늘 돌려차기를 했어요~",
    },
    {
      id: 2,
      date: time,
      author: "sitter",
      content: "우리아기가 배가 아픈가봐요",
    },
    {
      id: 3,
      date: time,
      author: "sitter",
      content: "우리아기가 배가 아픈가봐요",
    },
  ];
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {list.map((content) => (
          <li key={content.id} className="mb-5 ms-4">
            <Timeline content={content} />
          </li>
        ))}
      </ol>
    </>
  );
}
