"use client";
import { Button, TextInput, Label } from "flowbite-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAlertState } from "@/context/AlertContext";
import { useLoadingState } from "@/context/LoadingContext";
import { login } from "@/services/auth";
import { LoginFormType } from "@/types";

export default function LoginForm() {
  const { setAlert } = useAlertState();
  const { setIsLoading } = useLoadingState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    setIsLoading(true);
    login(data)
      .then(() => {
        window.location.href = "/home";
      })
      .catch(() => {
        setAlert({ type: "danger", message: "로그인에 실패했습니다." });
      })
      .finally(() => {
        setIsLoading(false);
        setIsLoading(false);
      });
  };
  return (
    <>
      <form
        className="w-96 flex flex-col gap-4 max-w-sm pt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="이메일" />
          </div>
          <TextInput
            {...register("email", { required: true })}
            type="email"
            required
          />
          {errors.email && <div>이메일을 입력해주세요</div>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="비밀번호" />
          </div>
          <TextInput
            {...register("password", { required: true })}
            type="password"
            required
          />
          {errors.password && <div>비밀번호를 입력해주세요</div>}
        </div>
        <Button className="bg-[#FEBD01] focus:bg-[#fda502] mt-10" type="submit">
          로그인
        </Button>
      </form>
    </>
  );
}
