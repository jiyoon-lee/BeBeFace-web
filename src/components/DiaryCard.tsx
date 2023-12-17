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
        <Modal.Header>📆 2023년 12월 15일</Modal.Header>
        <Modal.Body>
          <p className="text-2xl text-center my-3">아기의 기분: 기분 좋음</p>
          <div className="grid grid-cols-2 overflow-hidden m-2">
            <div className="bg-yellow-light rounded-l-lg overflow-hidden p-3">
              <TimelineList timelines={timelines} />
            </div>
            <div className="flex flex-col bg-[#FFE2F1] rounded-r-lg overflow-hidden">
              {/* <Image src={DiaryDefault} alt="diary default image" /> */}
              <Image src={DiaryTest} alt="diary default image" />
              <div className="p-4 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  오늘은 일찍 일어났다. 아기가 일어나서 웃는 모습이 기분 좋았다.
                  아침 식사를 준비하고, 우리 가족과 함께 아침 식사를 즐겼다.외출
                  시간! 아기를 유모차에 태워 공원으로 나갔다. 새로 피어난 꽃들이
                  보기 좋았다. 아기는 색다른 환경에서 즐거워하는 것 같다.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
