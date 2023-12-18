import { LoginResponseType, MemberMeResponse } from "@/types";
import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";

type SignupProp = {
  email: string;
  name: string;
  password: string;
  authority: "ROLE_USER" | "ROLE_ADMIN";
  referenceEmail: string;
};

type SigninProp = {
  email: string;
  password: string;
};

export async function signup(user: SignupProp): Promise<MemberMeResponse> {
  return axios.post(`/auth/register`, user).then((res) => res.data);
}

export async function login(
  user: SigninProp
): Promise<LoginResponseType | void> {
  return axios.post(`/auth/login`, user).then((res) => res.data);
}

export async function logout() {
  return axios.get(`/member/logout`, { headers: getHeader() });
}

export async function getMe(): Promise<MemberMeResponse> {
  return axios
    .get(`/member/me`, { headers: getHeader() })
    .then((res) => res.data);
}

export async function setParentEmail(email: string) {
  return axios.post("/auth/verifyEmail", { referenceEmail: email });
}
