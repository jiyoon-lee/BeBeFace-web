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
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
