"use client";
import { ErrorMessage } from "@hookform/error-message";
import { Label, TextInput, Textarea, Datepicker } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorStyling from "./ErrorStyling";

type FormData = {
  babyName: string;
  birth: string;
  etc: string;
};

export default function BabyForm() {
  const [open, setOpen] = useState(false);
  const [babyInfo, setBabyInfo] = useState({});

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });
  return (
    <>
      <h3 className="mb-5 text-xl font-bold dark:text-white text-center">
        아기정보
      </h3>
      <div className="flex items-center mb-4">
        <input
          checked={!open}
          id="default-radio-1"
          type="radio"
          value="0"
          name="default-radio"
          onChange={() => setOpen(false)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          아기정보 등록하지 않기
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={open}
          id="default-radio-2"
          type="radio"
          value="1"
          name="default-radio"
          onChange={() => setOpen(true)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          아기정보 등록하기
        </label>
      </div>
      {open && (
        <form className="mt-5 flex flex-col gap-2 max-w-sm">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="이름" />
            </div>
            <TextInput
              id="babyName"
              {...register("babyName", { required: "이름을 입력하세요." })}
              type="text"
            />
            <ErrorMessage
              errors={errors}
              name="babyName"
              render={({ message }) => <ErrorStyling>{message}</ErrorStyling>}
            ></ErrorMessage>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birth" value="생년월일" />
            </div>
            <Datepicker language="ko-KR" labelClearButton="닫기" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="etc" value="특이사항" />
            </div>
            <Textarea id="etc" rows={4} />
          </div>
        </form>
      )}
    </>
  );
}
