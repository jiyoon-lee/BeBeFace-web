import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import React from "react";
import MyCard from "@/components/MyCard";
import OauthLogin from "@/components/OauthLogin";
import LoginForm from "@/components/form/LoginForm";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
export default async function SigninPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};

  return (
    <div className="absolute -translate-x-1/2 left-1/2">
      <MyCard>
        <h3 className="text-3xl font-bold dark:text-white text-center">
          로그인
        </h3>
        <LoginForm />
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
        <OauthLogin providers={providers} callbackUrl={callbackUrl ?? "/"} />
      </MyCard>
    </div>
  );
}
