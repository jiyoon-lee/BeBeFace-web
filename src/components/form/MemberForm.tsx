"use client";
import { ErrorMessage } from "@hookform/error-message";
import { Label, TextInput } from "flowbite-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Controller, SubmitHandler, UseFormReturn } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import ErrorStyling from "./ErrorStyling";
import { FormData } from "@/app/auth/signup/page";

type Props = {
  additionalType: string;
  changeAdditionalType: (type: string) => void;
  memberForm: UseFormReturn<FormData>;
};

export default function MemberForm({
  memberForm: {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  },
  additionalType,
  changeAdditionalType,
}: Props) {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwdConf, setShowPwdConf] = useState(false);

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
      <h3 className="text-xl font-bold dark:text-white text-center">
        회원정보
      </h3>
      <form
        className="flex flex-col gap-2 max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="이름" />
          </div>
          <TextInput
            id="name"
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
            <Label htmlFor="email" value="이메일" />
          </div>
          <TextInput
            id="email"
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="비밀번호" />
          </div>
          <div className="relative">
            <input
              id="password"
              {...register("pwd", {
                required: "비밀번호를 입력하세요.",
                minLength: {
                  value: 4,
                  message: "최소 4자 이상 입력하세요.",
                },
              })}
              type={showPwd ? "text" : "password"}
              className="block w-full py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={() => setShowPwd(!showPwd)}
              className="text-gray-500 absolute end-0.5 bottom-0.5 focus:rounded-full font-medium rounded-lg text-sm px-4 py-2"
            >
              {showPwd ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </button>
          </div>
          <ErrorMessage
            errors={errors}
            name="pwd"
            render={({ message }) => <ErrorStyling>{message}</ErrorStyling>}
          ></ErrorMessage>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pwdConfirm" value="비밀번호 확인" />
          </div>
          <div className="relative">
            <input
              id="pwdConfirm"
              {...register("pwdConfirm", {
                required: "비밀번호를 입력하세요.",
                validate: (val: string) => {
                  if (watch("pwd") != val) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                },
              })}
              type={showPwdConf ? "text" : "password"}
              className="block w-full py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={() => setShowPwdConf(!showPwdConf)}
              className="text-gray-500 absolute end-0.5 bottom-0.5 focus:rounded-full font-medium rounded-lg text-sm px-4 py-2"
            >
              {showPwd ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </button>
          </div>
          <ErrorMessage
            errors={errors}
            name="pwdConfirm"
            render={({ message }) => <ErrorStyling>{message}</ErrorStyling>}
          ></ErrorMessage>
        </div>
      </form>
      <div className="mt-3 flex flex-col">
        <Label className="mb-2">회원가입 유형을 선택하십시오.</Label>
        <Controller
          name="auth"
          control={control}
          render={({ field }) => {
            return (
              <div className="flex">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    field.onChange("ROLE_ADMIN");
                    changeAdditionalType("baby");
                  }}
                  className={`grow border border-btn-default border-r-0 ${
                    additionalType === "baby" ? "bg-yellow-300" : "bg-gray-300"
                  } hover:bg-btn-default text-gray-800 font-bold py-2 px-4 rounded-l`}
                >
                  보호자
                </button>
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    field.onChange("ROLE_USER");
                    changeAdditionalType("sitter");
                  }}
                  className={`grow border border-btn-default ${
                    additionalType === "sitter"
                      ? "bg-yellow-300"
                      : "bg-gray-300"
                  } hover:bg-btn-default text-gray-800 font-bold py-2 px-4 rounded-r`}
                >
                  돌보미
                </button>
              </div>
            );
          }}
        />
      </div>
    </>
  );
}
