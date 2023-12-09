"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getMe } from "@/services/auth";
import { ResponseMemberMe, UserInfoType } from "@/types";

type Props = {
  children: React.ReactNode;
};

// type ContextType = {
//   useInfo: UserInfoType | null;
//   setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
//   isLogin: boolean;
//   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
// };

const AuthContext = createContext({});
export const AuthContextProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    getMe().then(({ name, email, authorities, memberId }: ResponseMemberMe) => {
      const authorityStatus = authorities[0].authorityStatus;
      setUserInfo({ name, email, role: authorityStatus, memberId });
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, isLogin, setIsLogin }}
    >
      <div className="antialiased dark:bg-gray-900 flex flex-col h-screen">
        <Navbar user={userInfo} />
        {children}
      </div>
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
