import React from "react";
import MyCard from "@/components/MyCard";
import LoginForm from "@/components/form/LoginForm";

export default async function SigninPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <MyCard>
        <h3 className="text-3xl font-bold dark:text-white text-center">
          로그인
        </h3>
        <LoginForm />
      </MyCard>
    </div>
  );
}
