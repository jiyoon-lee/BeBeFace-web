"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

export default function SignupForm() {
  return (
    <form className="flex flex-col gap-4 max-w-sm">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="이메일" />
        </div>
        <TextInput id="email1" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="이름" />
        </div>
        <TextInput id="email1" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="비밀번호" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="비밀번호 확인" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="전화번호(-제외)" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <Button className="bg-[#FDBD02]" type="submit">
        로그인
      </Button>
    </form>
  );
}
