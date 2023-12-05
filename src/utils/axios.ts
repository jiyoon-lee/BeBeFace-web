import ax from "axios";
import { setupInterceptors } from "./setupInterceptors";

export const axios = setupInterceptors(
  ax.create({
    baseURL: "http://192.168.0.42:8080",
    // baseURL: "htsstp://localhost:3000/api",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  })
);
