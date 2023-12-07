import { jwtVerify } from "jose";
import { NextRequest } from "next/server";
import * as authRepository from "@/data/auth.js";

const AUTH_ERROR = { message: "Authentication Error" };

const secret = new TextEncoder().encode("67464274C21C9ADFC59A635CA6768");

export async function isAuth(req: NextRequest) {
  const headers = req.headers.get("Authorization");
  const token = headers?.split(" ")[1];

  const { payload } = await jwtVerify(token! as string, secret, {
    issuer: "urn:example:issuer",
    audience: "urn:example:audience",
  });
  const isUser = await authRepository.findById(payload.id);
  if (!isUser) {
    return Promise.reject({ status: 401, message: AUTH_ERROR });
  }
  return Promise.resolve(isUser?.dataValues);
}
