import { Datepicker, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";

export default function BabyFormCard() {
  return (
    <div className="mt-5 w-4/5 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <form className="flex flex-col gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="아기이름" />
          </div>
          <TextInput id="name" type="text" value="이지윤" />
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
          <Textarea id="etc" rows={2} value="없음" />
        </div>
        <div className="flex items-center mt-2">
          <Label htmlFor="birth" className="mr-3" value="성별" />
          <div className="flex items-center me-4">
            <input
              id="inline-radio"
              type="radio"
              value="1"
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              남
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="inline-2-radio"
              type="radio"
              value="2"
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              여
            </label>
          </div>
        </div>
      </form>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-yellow-dark hover:bg-yellow-deepDark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          수정하기
        </button>
        <button
          type="button"
          className="text-white bg-yellow-dark hover:bg-yellow-deepDark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          등록하기
        </button>
      </div>
    </div>
  );
}
