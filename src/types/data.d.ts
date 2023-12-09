// 상품 카테고리
export type Category = "shoes" | "clothes" | "book";
// 상품 상태
export type Condition = "new" | "used";

// 사용자
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  member_id?: number;
};

// 상품
export type Product = {
  id: number;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  blurDataUrl: string;
  price: number;
  condition: Condition;
  owner: User;
};

// API 컨텍스트
export type ApiContext = {
  apiRootUrl: string;
};

export type SignupType = {
  password: string;
  name: string;
  email: string;
  role: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type ResponseMemberMe = {
  authorities: [{ id: number; authorityStatus: "ROLE_USER" | "ROLE_ADMIN" }];
  email: string;
  memberId: number;
  name: string;
};

export type UserInfoType = {
  email: string;
  name: string;
  memberId: number;
  role: "ROLE_USER" | "ROLE_ADMIN";
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type SignupFormData = {
  role: "ROLE_USER" | "ROLE_ADMIN";
  email: string;
  name: string;
  pwd: string;
  pwdConfirm: string;
  type: string;
};

export type LoginResponseType = {
  accessToken: string;
  email: string;
};
