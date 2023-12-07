import { getHeader } from "@/utils/authorization";
import { axios } from "@/utils/axios";
import { saveToken, clearToken } from "@/utils/token";

type SignupProp = {
  email: string;
  name: string;
  password: string;
  role: "ROLE_USER" | "ROLE_ADMIN";
};

type SigninProp = {
  email: string;
  password: string;
};

export async function signup(user: SignupProp) {
  return axios.post(`/auth/register`, user);
}

export async function signin(user: SigninProp) {
  return axios
    .post(`/auth/login`, user)
    .then((res) => res.data)
    .then((data) => saveToken(data.accessToken));
}

export async function logout() {
  return axios //
    .get(`/auth/logout`, { headers: getHeader() })
    .finally(() => {
      clearToken();
    });
}

export async function getMe() {
  return axios.get(`/member/me`, { headers: getHeader() });
}
