"use client";
import { useEffect } from "react";
import PushNoti from "@/components/PushNoti";
import TestApi from "@/components/TestApi";
import TestTestTest from "@/components/TestTestTest";
import { useAuthContext } from "@/context/AuthContext";
import { getMe } from "@/services/auth";

export default function HomePage() {
  const { setUserInfo, setIsLogin } = useAuthContext();
  useEffect(() => {
    getMe().then(({ name, email, role }) => {
      setIsLogin(true);
      setUserInfo({
        name,
        email,
        role,
      });
    });
  }, []);
  return (
    <>
      <TestApi />
      <PushNoti />
      <TestTestTest />
    </>
  );
}
