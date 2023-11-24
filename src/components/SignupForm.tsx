"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { redirect } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  name: string;
  password: string;
};

export default function SignupForm() {
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
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => response.text())
      .then(() => {
        redirect("/");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <form
      className="flex flex-col gap-4 max-w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="이메일" />
        </div>
        <TextInput {...register("email", { required: true })} type="email" />
        {errors.email && <div>이메일을 입력해주세요</div>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="이름" />
        </div>
        <TextInput {...register("name", { required: true })} type="name" />
        {errors.name && <div>이름을 입력해주세요</div>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="비밀번호" />
        </div>
        <TextInput
          {...register("password", { required: true })}
          type="password"
        />
        {errors.password && <div>비밀번호를 입력해주세요</div>}
      </div>
      <Button className="bg-[#FDBD02]" type="submit">
        등록
      </Button>
    </form>
  );
}
