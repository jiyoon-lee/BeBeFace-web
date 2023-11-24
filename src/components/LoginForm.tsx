"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

type Props = {
  onSignin: (error?: Error) => void;
};
export default function LoginForm({ onSignin }: Props) {
  const { signin } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    fetch("http://localhost:8080/login", {
      method: "POST", // *GET, POST, PUT, DELETE 등
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
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
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">아이디 저장</Label>
      </div>
      <Button className="bg-[#FDBD02]" type="submit">
        로그인
      </Button>
    </form>
  );
}
