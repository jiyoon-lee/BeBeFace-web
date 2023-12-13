import React, { useEffect } from "react";
import { IoIosTime } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { RxEnter } from "react-icons/rx";
import { useAuthContext } from "@/context/AuthContext";
import { getAttendances, setAttendance } from "@/services/attendance";
import { CurrentDateTime } from "@/utils/currentDateTime";
// import { useSWRConfig } from "swr";

export default function SitterInfo() {
  const { mutate } = useSWRConfig();
  const { userInfo } = useAuthContext();
  useEffect(() => {
    getAttendances();
  }, []);
  const current = new CurrentDateTime();
  const commuteList = [
    {
      id: 1,
      type: "go",
      datetime: `${current.getDate()} ${current.getTime()}`,
    },
    {
      id: 2,
      type: "leave",
      datetime: `${current.getDate()} ${current.getTime()}`,
    },
    {
      id: 3,
      type: "go",
      datetime: `${current.getDate()} ${current.getTime()}`,
    },
    {
      id: 4,
      type: "leave",
      datetime: `${current.getDate()} ${current.getTime()}`,
    },
    {
      id: 5,
      type: "go",
      datetime: `${current.getDate()} ${current.getTime()}`,
    },

    {
      id: 6,
      type: "leave",
      datetime: `${current.getDate()} ${current.getTime()}`,
    },
  ];
  const attendanceHandler = (type: "go" | "leave") => {
    setAttendance({ memberId: userInfo.memberId, type }).then(() => {
      mutate("http://192.168.0.42:8080/attendance/record/list");
    });
  };
  return (
    <div>
      <div className="mb-3 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col align-center justify-between items-center p-6 bg-gray-200 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <p className="text-2xl mb-4">
              <IoIosTime className="inline mr-2" />
              출퇴근 시간
            </p>
            <p className="text-lg">{current.getDate()}</p>
            <p className="text-xl mb-4">{current.getTime()}</p>
            <div>
              <button
                onClick={() => attendanceHandler("go")}
                type="button"
                className="text-gray-900 bg-white hover:bg-yellow-dark border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                <RxEnter className="mr-2" />
                출근
              </button>
              <button
                onClick={() => attendanceHandler("leave")}
                type="button"
                className="text-gray-900 bg-white hover:bg-yellow-dark border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                <RxExit className="mr-2" />
                퇴근
              </button>
            </div>
            {/* <button
              type="button"
              onClick={attendanceHandler}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              출/퇴근
            </button> */}
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        {commuteList.map((commute) => (
          <div
            key={commute.id}
            className={`p-4 mb-2 ${
              commute.type === "go" ? "bg-[#FFE7C2]" : "bg-[#C3CE98]"
            } rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
          >
            <h5 className="flex items-center text-md tracking-tight text-gray-900 dark:text-white">
              <div className="mr-3 relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {commute.type === "go" ? "출" : "퇴"}
                </span>
              </div>
              {`
                ${commute.datetime}에 
                ${commute.type === "go" ? "출근했습니다." : "퇴근했습니다."}
              `}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
