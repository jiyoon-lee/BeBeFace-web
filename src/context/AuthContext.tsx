"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getMe } from "@/services/auth";
import { MemberMeResponse, UserInfo } from "@/types";

type AuthContextState = {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo | null) => void;
};
const AuthContext = createContext<AuthContextState | null>(null);
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    getMe().then(({ authority, email, memberId, name }: MemberMeResponse) => {
      if (memberId) {
        setUserInfo({
          email,
          memberId,
          name,
          authority: authority.authorityStatus,
        });
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="antialiased dark:bg-gray-900 flex flex-col h-screen">
        <Navbar user={userInfo} />
        {children}
      </div>
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
