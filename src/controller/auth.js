import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepository from "@/data/auth.js";

export async function signup(data) {
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

export async function login(body) {
  const { email, password } = body;
  const user = await userRepository.findByEmail(email);
  if (!user) {
    return Promise.reject({ status: 409, message: "Invalid user or password" });
  }
  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return Promise.reject({ status: 401, message: "Invalid user or password" });
  }
  const token = createJwtToken(user.id);
  return Promise.resolve({
    status: 200,
    accessToken: token,
    email,
  });
}

function createJwtToken(id) {
  return jwt.sign({ id }, "67464274C21C9ADFC59A635CA6768", {
    expiresIn: 86400,
  });
}

export async function me(req, res) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
}
