"use client";

import { createContext, useContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};
const LoadingContext = createContext({});
export const LoadingContextProvider = ({ children }: Props) => {
  const [startLoading, setStartLoading] = useState(false);
  const [stopLoading, setStopLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        startLoading,
        setStartLoading,
        stopLoading,
        setStopLoading,
        cancelLoading,
        setCancelLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
export const useLoadingContext = () => useContext(LoadingContext);
