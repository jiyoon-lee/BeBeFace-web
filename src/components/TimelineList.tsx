import React from "react";
import Timeline from "./Timeline";

export default function TimelineList() {
  const list = [
    { id: 1, date: "February 2022", author: "parent" },
    { id: 2, date: "February 2022", author: "sitter" },
  ];
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {list.map((content) => (
          <li key={content.id} className="mb-10 ms-4">
            <Timeline content={content} />
          </li>
        ))}
      </ol>
    </>
  );
}
