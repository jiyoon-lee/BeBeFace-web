"use client";
import React from "react";
import { SWRConfig } from "swr";
type Props = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 100,
        refreshInterval: 3000,
        fallback: { a: 1, b: 1 },
        fetcher: (url: string, init) => {
          console.log("들어왔냐궁+++++SWRConfigContext");
          return fetch(`http://localhost:3000${url}`, init).then((res) =>
            res.json()
          );
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
