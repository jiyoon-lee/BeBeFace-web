import React, { useEffect, useState } from "react";
import { IoIosTime } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { RxEnter } from "react-icons/rx";
import { useUserState } from "@/context/UserContext";
import { getAttendances, setAttendance } from "@/services/attendance";
import { pushAlarm } from "@/services/pushAlarm";
import { Attendace } from "@/types";
import { CurrentDateTime } from "@/utils/currentDateTime";
// import { useSWRConfig } from "swr";

export default function SitterInfo() {
  // const { mutate } = useSWRConfig();
  const [user] = useUserState();
  const [btnDis, setBtnDis] = useState("leave");
  const [attendances, setAttendances] = useState<Attendace[]>();
  useEffect(() => {
    getAttendances().then((res?: Attendace[]) => {
      if (res) {
        const arr = res.reverse();
        setAttendances(arr);
        if (arr[0].isGo) setBtnDis("go");
      }
    });
  }, []);
  const current = new CurrentDateTime();

  const attendanceHandler = (type: "go" | "leave") => {
    pushAlarm(`돌보미가 ${type === "go" ? "출근" : "퇴근"}했습니다.`);
    if (user) {
      setAttendance({ memberId: user.memberId, type }).then(() => {
        // mutate("http://192.168.0.42:8080/attendance/record/list");
      });
    }
  };
  return (
    <div>
      <div className="mb-3 p-6 bg-white border-gray-300 border-2 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="grid grid-cols-2">
          <div className="py-5 grid content-center text-center bg-[#FFECE5] text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-l-lg w-full">
            <p className="text-2xl mb-4">
              <IoIosTime className="inline mr-2" />
              출퇴근 시간
            </p>
            <p className="text-lg">{current.getDate()}</p>
            <p className="text-xl">{current.getTime()}</p>
          </div>
          <div className="flex items-center gap-3 p-6 justify-center bg-[#E4F0FF] text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-r-lg w-full">
            <button
              onClick={() => attendanceHandler("go")}
              type="button"
              disabled={btnDis === "go"}
              className={`${
                btnDis === "go"
                  ? "text-white bg-gray-300"
                  : "text-gray-900 bg-white hover:bg-yellow-dark"
              } border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md px-6 py-5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700`}
            >
              <RxEnter className="mr-2" />
              출근
            </button>
            <button
              onClick={() => attendanceHandler("leave")}
              type="button"
              disabled={btnDis === "leave"}
              className={`${
                btnDis === "leave"
                  ? "text-white bg-gray-300"
                  : "text-gray-900 bg-white hover:bg-yellow-dark"
              } border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-md px-6 py-5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700`}
            >
              <RxExit className="mr-2" />
              퇴근
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white border-gray-300 border-2 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        {attendances ? (
          attendances.map((attendance) => (
            <div
              key={attendance.id}
              className={`p-4 mb-2 ${
                attendance.isGo ? "bg-[#FFE7C2]" : "bg-[#FFD9AE]"
              } rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
            >
              <h5 className="flex items-center text-md tracking-tight text-gray-900 dark:text-white">
                <div className="mr-3 relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-[#73DBBF] rounded-full dark:bg-gray-600">
                  <span className="font-medium text-white dark:text-gray-300">
                    {attendance.isGo ? "출" : "퇴"}
                  </span>
                </div>
                {`
                ${attendance.date}에 
                ${attendance.isGo ? "출근했습니다." : "퇴근했습니다."}
              `}
              </h5>
            </div>
          ))
        ) : (
          <p className="text-lg">조회된 출퇴근 목록이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
