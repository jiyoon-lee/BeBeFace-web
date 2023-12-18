import ax from "axios";
import { setupInterceptors } from "./setupInterceptors";

export const axios = setupInterceptors(
  ax.create({
    baseURL: "http://localhost:8080",
    // baseURL: "http://localhost:3000/api",
    maxBodyLength: Infinity,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  })
);
