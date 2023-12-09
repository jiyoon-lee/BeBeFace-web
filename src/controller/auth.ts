import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import * as userRepository from "@/data/auth.js";
import { LoginType, SignupType, User } from "@/types";

const secret = new TextEncoder().encode("67464274C21C9ADFC59A635CA6768");

export async function signup(data: SignupType) {
  const { password, name, email, role } = data;
  const found = await userRepository.findByEmail(email);
  if (found) {
    return Promise.reject({ status: 409 });
  }
  const hashed = bcrypt.hashSync(password, 12);
  await userRepository.createUser({
    name,
    email,
    password: hashed,
    role,
  });
  return Promise.resolve({ status: 201 });
}

export async function login(body: LoginType) {
  const { email, password } = body;
  const isUser = await userRepository.findByEmail(email);
  if (!isUser) {
    return Promise.reject({ status: 409, message: "Invalid user or password" });
  }
  const user: User = isUser.dataValues;
  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return Promise.reject({ status: 401, message: "Invalid user or password" });
  }
  const token = await createJwtToken(user);
  return Promise.resolve({
    status: 200,
    accessToken: token,
    email,
  });
}

export async function createJwtToken({
  id,
  name,
  email,
}: User): Promise<string> {
  return new SignJWT({ id, name, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2d")
    .sign(secret);
}

// export async function me(req, res) {
//   const user = await userRepository.findById(req.userId);
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }
//   res.status(200).json({ token: req.token, username: user.username });
// }
