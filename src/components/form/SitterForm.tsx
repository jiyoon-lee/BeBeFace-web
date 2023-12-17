"use client";
import { ErrorMessage } from "@hookform/error-message";
import { Label, TextInput } from "flowbite-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import ErrorStyling from "./ErrorStyling";
import { SitterFormData } from "@/types";

type Props = {
  sitterForm: UseFormReturn<SitterFormData>;
  isMapParent: boolean;
  setIsMapParent: (isMapParent: boolean) => void;
};

export default function SitterForm({
  sitterForm: {
    register,
    formState: { errors },
  },
  isMapParent,
  setIsMapParent,
}: Props) {
  return (
    <>
      <h3 className="mb-5 text-xl font-bold dark:text-white text-center">
        돌보미 정보
      </h3>
      <div className="flex items-center mb-4">
        <input
          checked={!isMapParent}
          id="default-radio-1"
          type="radio"
          value="0"
          name="default-radio"
          onChange={() => setIsMapParent(false)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          보호자 등록하지 않기
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={isMapParent}
          id="default-radio-2"
          type="radio"
          value="1"
          name="default-radio"
          onChange={() => setIsMapParent(true)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          보호자 등록하기
        </label>
      </div>
      {isMapParent && (
        <form className="mt-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="parent_email" value="보호자 이메일" />
            </div>
            <TextInput
              id="parent_email"
              {...register("email", {
                required: "이메일을 입력하세요.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              })}
              type="email"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <ErrorStyling>{message}</ErrorStyling>}
            ></ErrorMessage>
          </div>
        </form>
      )}
    </>
  );
}
