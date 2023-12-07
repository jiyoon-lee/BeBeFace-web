import Image from "next/image";
import React from "react";
import milk from "@/assets/images/milk.png";
import poop from "@/assets/images/poop.png";
import shower from "@/assets/images/shower.png";
import sleep from "@/assets/images/sleep.jpg";
import { setAttendance } from "@/services/attendance.js";
import { CurrentDateTime } from "@/utils/currentDateTime";

export default function SitterInfo() {
  const btnList = [
    { name: "", title: "배병", image: poop },
    { name: "", title: "분유", image: milk },
    { name: "", title: "수면", image: sleep },
    { name: "", title: "목욕", image: shower },
  ];
  const commuteList = [
    { datetime: "", id: "1" },
    { datetime: "", id: "1" },
    { datetime: "", id: "1" },
    { datetime: "", id: "1" },
    { datetime: "", id: "1" },
  ];
  const current = new CurrentDateTime();
  const attendanceHandler = () => {
    setAttendance().then(console.log);
  };
  return (
    <div>
      <div className="mb-3 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center p-6 bg-gray-200 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <p className="text-2xl mb-4">출퇴근 시간</p>
            <p className="text-lg">{current.getDate()}</p>
            <p className="text-xl mb-4">{current.getTime()}</p>
            <button
              type="button"
              onClick={attendanceHandler}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              출/퇴근
            </button>
          </div>
          <div className="flex flex-col justify-center items-center p-6 bg-gray-200 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <p className="text-2xl mb-4">알림 보내기</p>
            <div className="grid grid-cols-2 gap-4">
              {btnList.map((btn) => (
                <button
                  key={btn.name}
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                >
                  <Image width={50} src={btn.image} alt="alarm button icon" />
                  {btn.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        {commuteList.map((commut) => (
          <div
            key={commut.id}
            className="p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
