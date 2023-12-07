import { getToken } from "@/utils/token";

export const getHeader = () => {
  return { Authorization: `Bearer ${getToken()}` };
};
