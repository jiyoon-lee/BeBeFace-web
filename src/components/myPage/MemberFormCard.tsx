import { Label, TextInput } from "flowbite-react";
import React from "react";

export default function MemberFormCard() {
  return (
    <div className="w-4/5 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <form className="flex flex-col gap-2 mb-7">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="이름" />
          </div>
          <TextInput id="name" type="text" value="이지윤" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="이메일" />
          </div>
          <TextInput id="name" type="text" value="jiyoon3@gmail.com" />
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
