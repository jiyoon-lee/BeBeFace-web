import React from "react";
import useSWR from "swr";
import type { ApiContext, User } from "@/types";

type AuthContextProviderProps = {
  context: ApiContext;
  authUser?: User;
};

const AuthContextProvider = ({
  context,
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  const { data, error, mutate } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/me`
  );
  const isLoading = !data && !error;

  const signinInternal = async () => {};
  const signoutInternal = async () => {};
  return (
    <AuthContext.Provider value={{ authUser: data ?? authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function AuthContext() {
  return <div></div>;
}
