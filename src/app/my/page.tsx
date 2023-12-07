"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBabyCarriage } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import BabyInfo from "@/components/myPage/BabyInfo";
import MyInfo from "@/components/myPage/MyInfo";
import SitterInfo from "@/components/myPage/SitterInfo";
const navList = [
  { name: "me", title: "내 정보", icon: CgProfile },
  { name: "baby", title: "우리 아기 정보", icon: LuBaby },
  { name: "sitter", title: "돌보미 정보", icon: FaBabyCarriage },
];
export default function MyPage() {
  const [page, setPage] = useState("me");
  return (
    <div className="md:flex">
      <ul className="basis-1/5 flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
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
      {page === "me" && <MyInfo />}
      {page === "baby" && <BabyInfo />}
      {page === "sitter" && <SitterInfo />}
    </div>
  );
}
