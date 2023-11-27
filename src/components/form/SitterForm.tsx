"use client";
import { ErrorMessage } from "@hookform/error-message";
import { Label } from "flowbite-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import ErrorStyling from "./ErrorStyling";

type FormData = {
  email: string;
};

export default function SitterForm() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");
    fetch("http://localhost:8080/register", {
      method: "POST", // *GET, POST, PUT, DELETE 등
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((response) => response.text())
      .then(() => {
        redirect("/");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <h3 className="mb-5 text-xl font-bold dark:text-white text-center">
        돌보미 정보
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
          보호자 등록하지 않기
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
          보호자 등록하기
        </label>
      </div>
      {open && (
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 block">
            <Label htmlFor="email" value="보호자 이메일" />
          </div>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "이메일을 입력하세요.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식이 올바르지 않습니다.",
                  },
                })}
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-l-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute top-0 end-0 px-5 h-full text-sm font-medium text-stone-700 bg-yellow-300 rounded-e-lg border border-btn-default hover:bg-btn-default focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <IoMdSearch size={25} />
              </button>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <ErrorStyling>{message}</ErrorStyling>}
          ></ErrorMessage>
        </form>
      )}
    </>
  );
}
