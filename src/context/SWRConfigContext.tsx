"use client";
import React from "react";
import { SWRConfig } from "swr";
import { getHeader } from "@/utils/authorization";

export default function SWRConfigContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(`http://192.168.0.42:8080${url}`, {
            headers: getHeader(),
          }).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
