"use client";
import { createContext, useContext, useState } from "react";
import { UserInfoType } from "@/types";

type Props = {
  children: React.ReactNode;
};
const AuthContext = createContext({});
export const AuthContextProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, isLogin, setIsLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
