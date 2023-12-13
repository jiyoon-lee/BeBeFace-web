// 사용자
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  member_id?: number;
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
export type UserInfo = {
  email: string;
  name: string;
  memberId: number;
  authority: "ROLE_USER" | "ROLE_ADMIN";
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

export type AttendanceResponse = {
  attendance: [];
  leaveTime: [];
  id: number;
  member: {
    id: number;
    email: string;
    name: string;
    password: string;
    authority: {
      id: number;
      authorityStatus: string;
    };
    babies: [];
    diaries: [];
  };
};

export type MemberMeResponse = {
  authority: { id: number; authorityStatus: "ROLE_USER" | "ROLE_ADMIN" };
  email: string;
  memberId: number;
  name: string;
};
