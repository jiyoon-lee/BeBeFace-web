import { DefaultSession } from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
}

// 사용자
export type User = {
  email: string;
  username: string;
  password: string;
};

// API 컨텍스트
export type ApiContext = {
  apiRootUrl: string;
};
