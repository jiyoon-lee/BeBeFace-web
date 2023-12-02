import { client } from "./sanity";
// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + ":" + process.env.NEXT_PUBLIC_API_PORT;

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

type SignupProp = {
  email: string;
  name: string;
  password: string;
  auth: "ROLE_USER" | "ROLE_ADMIN";
};

type SigninProp = {
  email: string;
  password: string;
};
export async function addUser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type=="user" && username =="${username}"][0]{...,"id": _id,following[]->{username,image},followers[]->{username,image},"bookmarks": bookmarks[]->_id}`
  );
}

export async function signup(user: SignupProp) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
}

export async function signin(user: SigninProp) {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
}
