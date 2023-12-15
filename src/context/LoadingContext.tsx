"use client";
import dynamic from "next/dynamic";
import { createContext, useContext, useState } from "react";

type LoadingContextState = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextState | null>(null);
const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);

export const LoadingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && (
        <GridLoader
          className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          color="#FFB852"
        />
      )}
      {children}
    </LoadingContext.Provider>
  );
};
export function useLoadingState() {
  const loadingState = useContext(LoadingContext);
  if (!loadingState) {
    throw new Error("UserContext is not used");
  }
  return loadingState;
}
