"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getMe } from "@/services/auth";
import { MemberMeResponse, User } from "@/types";

type UserContextState = [User | null, (user: User | null) => void];

const UserContext = createContext<UserContextState | null>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getMe().then(({ authority, email, memberId, name }: MemberMeResponse) => {
      if (memberId) {
        setUser({
          email,
          memberId,
          name,
          authority: authority.authorityStatus,
        });
      }
    });
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="antialiased dark:bg-gray-900 flex flex-col h-screen">
        <Navbar user={user} />
        {children}
      </div>
    </UserContext.Provider>
  );
}
// Context를 추후 더 편하게 사용할 수 있도록 만든 Hook입니다.
export function useUserState() {
  const userState = useContext(UserContext);
  if (!userState) {
    throw new Error("UserContext is not used");
  }
  return userState;
}
