"use client";

import { createContext, useContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};
const AuthContext = createContext({});
export const AuthContextProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState("red");
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
