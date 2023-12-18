"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MyCard from "@/components/MyCard";
import BabyForm from "@/components/form/BabyForm";
import MemberForm from "@/components/form/MemberForm";
import SitterForm from "@/components/form/SitterForm";
import { useAlertState } from "@/context/AlertContext";
import { useLoadingState } from "@/context/LoadingContext";
import { signup } from "@/services/auth";
import { addBaby } from "@/services/baby";
import { BabyFormData, SignupFormData, SitterFormData } from "@/types";

export default function SignupPage() {
  const { setIsLoading } = useLoadingState();
  const { setAlert } = useAlertState();
  const router = useRouter();
  const [sitterEmail, setSitterEmail] = useState("");
  const [additionalType, setAdditionalType] = useState("");
  const [isBaby, setIsBaby] = useState(false);
  const [isMapParent, setIsMapParent] = useState(false);
  const changeAdditionalType = (type: string) => setAdditionalType(type);
  const memberForm = useForm<SignupFormData>({
    mode: "onBlur",
  });
  const babyForm = useForm<BabyFormData>({
    mode: "onBlur",
  });
  const sitterForm = useForm<SitterFormData>({
    mode: "onBlur",
  });
  const submitForm = async () => {
    setIsLoading(true);
    const { getValues } = memberForm;
    const name = getValues("name");
    const email = getValues("email");
    const password = getValues("pwd");
    const authorities = getValues("role");
    try {
      const { memberId } = await signup({
        name,
        email,
        password,
        authority: authorities,
        referenceEmail: sitterEmail,
      });
      if (isBaby) {
        const { getValues } = babyForm;
        const name = getValues("name");
        const birth = getValues("birth");
        const etc = getValues("etc");
        addBaby({
          name,
          birth,
          etc,
          memberId,
        })
          .then(() => {
            setAlert({
              type: "success",
              message: "회원가입을 완료했습니다.",
            });
            router.push("/auth/signin");
          })
          .catch((err) => {
            setAlert({
              type: "danger",
              message: "회원가입에 실패하였습니다. 관리자에게 문의해주세요.",
            });
            console.log(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        router.push("/auth/signin");
        setAlert({
          type: "success",
          message: "회원가입을 완료했습니다.",
        });
      }
    } catch (e) {
      setAlert({
        type: "danger",
        message: "회원가입에 실패했습니다. 관리자에게 문의해주세요.",
      });
      memberForm.reset();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
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
              {additionalType === "baby" ? (
                <BabyForm
                  email={sitterEmail}
                  setSitterEmail={setSitterEmail}
                  babyForm={babyForm}
                  isBaby={isBaby}
                  setIsBaby={setIsBaby}
                />
              ) : (
                <SitterForm
                  sitterForm={sitterForm}
                  isMapParent={isMapParent}
                  setIsMapParent={setIsMapParent}
                />
              )}
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
