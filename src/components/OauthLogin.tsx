"use client";

import Image from "next/image";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import GoogleLogo from "@/assets/images/google_logo.png";
import KaKaoLogo from "@/assets/images/kakao_logo.png";
import NaverLogo from "@/assets/images/naver_logo.png";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const filterName = (name: string) => {
  name = name.toLocaleLowerCase();
  switch (name) {
    case "google":
      return GoogleLogo;
    case "kakao":
      return KaKaoLogo;
    case "naver":
      return NaverLogo;
    default:
      return "";
  }
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="text-white bg-[#ffdd08] hover:bg-[#ffdd08]/90 focus:ring-4 focus:ring-[#ffdd08]/50 focus:outline-none font-medium rounded-lg text-sm px-1 py-1 text-center flex items-center dark:focus:ring-[#2557D6]/50"
      >
        <div className="bg-white h-8 w-8 rounded-md flex items-center justify-center">
          <Image width={23} height={23} src={KaKaoLogo} alt="service icon" />
        </div>
        <div className="grow flex justify-center items-center">
          KAKAO 로그인
        </div>
      </button>
      {Object.values(providers).map(({ name, id }) => (
        <button
          key={id}
          onClick={() => signIn(id, { callbackUrl })}
          type="button"
          className="text-white bg-[#4285f4] hover:bg-[#4285f4]/90 focus:ring-4 focus:ring-[#4285f4]/50 focus:outline-none font-medium rounded-lg text-sm px-1 py-1 text-center flex items-center dark:focus:ring-[#2557D6]/50"
        >
          <div className="bg-white h-8 w-8 rounded-md flex items-center justify-center">
            <Image
              width={20}
              height={20}
              src={filterName(name)}
              alt="service icon"
            />
          </div>
          <div className="grow flex justify-center items-center">
            {name} 로그인
          </div>
        </button>
      ))}
    </div>
  );
}
