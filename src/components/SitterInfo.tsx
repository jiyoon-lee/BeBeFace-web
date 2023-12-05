"use client";
import React from "react";
import { setAttendance } from "@/services/attendance";

export default function SitterInfo() {
  const setCommute = () => {
    setAttendance().then((data) => {
      console.log(data);
    });
  };
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        출퇴근 시간
        <div>현재시각</div>
        <button
          onClick={() => {
            setCommute();
          }}
        >
          출퇴근
        </button>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Solid foundation for any project
          </h3>
          <p className="my-4">
            Designing with Figma components that can be easily translated to the
            utility classNamees of Tailwind CSS is a huge timesaver
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Roberta Casas</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Lead designer at Dropbox
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
