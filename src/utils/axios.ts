import axios from "axios";

export const axios_ins = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.0.42:8080",
  headers: { "Content-Type": "application/json" },
});

export const axios_ins_token = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.0.42:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token") || "",
  },
});
