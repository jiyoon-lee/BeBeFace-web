"use client";
import { Modal } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import DiaryDefault from "@/assets/images/diary_default.png";
import useSWR from "swr";
import TimelineList from "./TimelineList";
import DiaryTest from "@/assets/images/diary_test.jpeg";
import { TimelineResponse } from "@/types";
import { CurrentDateTime } from "@/utils/currentDateTime";

type Props = {
  openModal: boolean;
  onClose: () => void;
};
export default function DiaryCard({ openModal, onClose }: Props) {
  const [timelines, setTimelines] = useState<TimelineResponse[]>();
  const date = new CurrentDateTime();

  const { data } = useSWR<TimelineResponse[]>(
    `/timelines?dateTime=${date.getDateDash()}`
  );
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) setTimelines(data.reverse());
  }, [data]);
  return (
    <>
      <Modal size="5xl" show={openModal} onClose={onClose}>
        <Modal.Header>📆 2023년 12월 19일</Modal.Header>
        <Modal.Body>
          <p className="text-2xl text-center my-3">내 사랑 지윤이</p>
          <div className="grid grid-cols-2 overflow-hidden m-2">
            <div className="bg-yellow-light rounded-l-lg overflow-hidden p-3">
              <TimelineList timelines={timelines} />
            </div>
            <div className="flex flex-col bg-[#FFE2F1] rounded-r-lg overflow-hidden">
              {/* <Image src={DiaryDefault} alt="diary default image" /> */}
              <Image src={DiaryTest} alt="diary default image" />
              <div className="p-4 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  밥도 잘 먹고, 잠도 잘잤네 우리 지윤이~
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
