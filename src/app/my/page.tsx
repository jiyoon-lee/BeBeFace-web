"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBabyCarriage } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";
import BabyInfo from "@/components/myPage/BabyInfo";
import MyInfo from "@/components/myPage/MyInfo";
import PushAlarm from "@/components/myPage/PushAlarm";
import SitterInfo from "@/components/myPage/SitterInfo";
const navList = [
  { name: "alarm", title: "기록하기", icon: TfiWrite },
  { name: "sitter", title: "돌보미 정보", icon: FaBabyCarriage },
  { name: "me", title: "내 정보", icon: CgProfile },
  { name: "baby", title: "우리 아기 정보", icon: LuBaby },
];
export default function MyPage() {
  const [page, setPage] = useState("alarm");
  return (
    <div className="md:flex max-w-4xl mx-auto h-full">
      <ul className="basis-1/4 flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {navList.map((nav) => (
          <li key={nav.name}>
            <a
              onClick={() => setPage(nav.name)}
              className={`${
                page === nav.name
                  ? "text-white bg-yellow-dark active dark:bg-yellow-dark"
                  : "border-gray-300 border-2 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              } w-full inline-flex items-center px-4 py-3 rounded-lg`}
              aria-current="page"
            >
              <nav.icon size={24} className="mr-3" />
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full">
        {page === "me" && <MyInfo />}
        {page === "baby" && <BabyInfo />}
        {page === "sitter" && <SitterInfo />}
        {page === "alarm" && <PushAlarm />}
      </div>
    </div>
  );
}
