"use client";
import React, { useState } from "react";
import styled from "./Calendar.module.css";
import DiaryCard from "./DiaryCard";

export default function Calendar() {
  const [openModal, setOpenModal] = useState(false);

  const weeks = ["SUN", "MON", "TUE", "WEN", "THI", "FRI", "SAT"];
  return (
    <>
      <DiaryCard onClose={() => setOpenModal(false)} openModal={openModal} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-auto">
        <table className="table-fixed w-full text-sm text-left rtl:text-right text-[#969696]">
          <thead className="border text-[#969696] text-xs uppercase bg-white border-solid border-[#E8E8E8] dark:text-white">
            <tr>
              {weeks.map((day, index) => (
                <th
                  key={index}
                  scope="col"
                  className="border-b px-3 py-3 border-r"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border align-top text-[#969696]">
            <tr className="border-b bg-white border-solid border-[#E8E8E8] h-24">
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td
                className="border-r px-3 py-2"
                onClick={() => setOpenModal(true)}
              >
                1
                <div className="flex flex-col">
                  <span className="w-fit mb-1 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Default
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                    Yellow
                  </span>
                </div>
              </td>
              <td
                className={`border-r px-3 py-2 ${styled.bgHeart}`}
                onClick={() => setOpenModal(true)}
              >
                <span>2</span>
              </td>
            </tr>
            <tr className="border-b bg-white border-solid border-[#E8E8E8] h-24">
              {Array.from({ length: 7 }, (v, i) => i + 3).map((index) => (
                <td
                  key={index}
                  className="border-r px-3 py-2"
                  onClick={() => setOpenModal(true)}
                >
                  {index}
                </td>
              ))}
            </tr>
            <tr className="border-b bg-white border-solid border-[#E8E8E8] h-24">
              {Array.from({ length: 7 }, (v, i) => i + 10).map((index) => (
                <td
                  key={index}
                  className={`border-r px-3 py-2 ${styled.bgHeart}`}
                  onClick={() => setOpenModal(true)}
                >
                  {index}
                </td>
              ))}
            </tr>
            <tr className="border-b bg-white border-solid border-[#E8E8E8] h-24">
              {Array.from({ length: 7 }, (v, i) => i + 17).map((index) => (
                <td
                  key={index}
                  className="border-r px-3 py-2"
                  onClick={() => setOpenModal(true)}
                >
                  {index}
                  <div className="flex flex-col">
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                      Green
                    </span>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b bg-white border-solid border-[#E8E8E8] h-24">
              {Array.from({ length: 7 }, (v, i) => i + 24).map((index) => (
                <td
                  key={index}
                  className="border-r px-3 py-2"
                  onClick={() => setOpenModal(true)}
                >
                  {index}
                </td>
              ))}
            </tr>
            <tr className="border-b bg-white border-solid border-[#E8E8E8] h-24">
              <td
                className={`border-r px-3 py-2 ${styled.bgHeart}`}
                onClick={() => setOpenModal(true)}
              >
                31
              </td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
              <td className="border-r px-3 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
