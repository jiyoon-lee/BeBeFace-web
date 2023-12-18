"use client";
import { ErrorMessage } from "@hookform/error-message";
import { Label, TextInput, Textarea, Datepicker } from "flowbite-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import ErrorStyling from "./ErrorStyling";
import { BabyFormData } from "@/types";

type Props = {
  email: string;
  babyForm: UseFormReturn<BabyFormData>;
  isBaby: boolean;
  setIsBaby: (isBaby: boolean) => void;
  setSitterEmail: (sitterEmail: string) => void;
};

export default function BabyForm({
  babyForm: {
    register,
    formState: { errors },
  },
  email,
  isBaby,
  setIsBaby,
  setSitterEmail,
}: Props) {
  return (
    <>
      <h3 className="mb-5 text-xl font-bold dark:text-white text-center">
        아기정보
      </h3>
      <div className="flex items-center mb-4">
        <input
          checked={!isBaby}
          id="default-radio-1"
          type="radio"
          value="0"
          name="default-radio"
          onChange={() => setIsBaby(false)}
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
          checked={isBaby}
          id="default-radio-2"
          type="radio"
          value="1"
          name="default-radio"
          onChange={() => setIsBaby(true)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          아기정보 등록하기
        </label>
      </div>
      {isBaby && (
        <form className="mt-5 flex flex-col gap-2 max-w-sm">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="이름" />
            </div>
            <TextInput
              id="babyName"
              {...register("name", { required: "이름을 입력하세요." })}
              type="text"
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <ErrorStyling>{message}</ErrorStyling>}
            ></ErrorMessage>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birth" value="생년월일" />
            </div>
            <Datepicker
              {...register("birth")}
              language="ko-KR"
              labelClearButton="닫기"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="etc" value="특이사항" />
            </div>
            <Textarea id="etc" {...register("etc")} rows={4} />
          </div>
        </form>
      )}
      <div className="mt-5">
        <div className="mb-2 block">
          <Label htmlFor="email" value="돌보미 이메일" />
        </div>
        <TextInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setSitterEmail(e.target.value)}
        />
      </div>
    </>
  );
}
