import React from "react";
import MemberFormCard from "./MemberFormCard";

export default function MyInfo() {
  return (
    <div>
      <div className="relative py-10 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="flex justify-center">
          <MemberFormCard />
        </div>
      </div>
    </div>
  );
}
