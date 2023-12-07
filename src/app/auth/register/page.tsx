"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MyCard from "@/components/MyCard";
import BabyForm from "@/components/form/BabyForm";
import MemberForm from "@/components/form/MemberForm";
import SitterForm from "@/components/form/SitterForm";
import { signup } from "@/services/auth";

export type FormData = {
  role: "ROLE_USER" | "ROLE_ADMIN";
  email: string;
  name: string;
  pwd: string;
  pwdConfirm: string;
  type: string;
};

export default function SignupPage() {
  const router = useRouter();
  const [additionalType, setAdditionalType] = useState("");
  const changeAdditionalType = (type: string) => setAdditionalType(type);
  const memberForm = useForm<FormData>({
    mode: "onBlur",
  });
  const submitForm = async () => {
    const { getValues } = memberForm;
    const name = getValues("name");
    const email = getValues("email");
    const password = getValues("pwd");
    const role = getValues("role");
    signup({
      name,
      email,
      password,
      role,
    }).then(() => {
      router.push("/auth/signin");
    });
  };
  return (
    <div className="flex justify-center">
      <MyCard>
        <h3 className="text-3xl font-bold dark:text-white text-center mb-5">
          회원가입
        </h3>
        <div
          className={`mb-5 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800 ${
            additionalType && "grid md:grid-cols-2"
          }`}
        >
          <figure
            className={`w-96 p-8 bg-white border-b border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ${
              additionalType && "md:rounded-r-none md:rounded-ss-lg md:border-e"
            }`}
          >
            <MemberForm
              memberForm={memberForm}
              additionalType={additionalType}
              changeAdditionalType={changeAdditionalType}
            />
          </figure>
          {additionalType && (
            <figure className="w-96 p-8 bg-white border-b border-gray-200 md:rounded-lg dark:bg-gray-800 dark:border-gray-700">
              {additionalType === "baby" ? <BabyForm /> : <SitterForm />}
            </figure>
          )}
        </div>
        {additionalType && (
          <button
            onClick={submitForm}
            className="bg-yellow-300 hover:bg-btn-default w-1/3 float-right text-stone-700 font-bold py-2 px-4 rounded"
          >
            등록
          </button>
        )}
      </MyCard>
    </div>
  );
}
