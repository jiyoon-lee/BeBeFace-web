import React from "react";
import MyCard from "@/components/MyCard";
import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="absolute -translate-x-1/2 left-1/2">
      <MyCard>
        <h3 className="text-3xl font-bold dark:text-white text-center">
          회원가입
        </h3>
        <SignupForm />
      </MyCard>
    </div>
  );
}
