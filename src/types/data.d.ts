export type SignupType = {
  password: string;
  name: string;
  email: string;
  role: string;
};

export type BabyFormData = {
  name: string;
  birth: string;
  etc: string;
  memberId?: number;
};
export type LoginType = {
  email: string;
  password: string;
};
export type User = {
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

export type DiaryForm = {
  title: string;
  content: string;
  file: string;
};

export type TimelineResponse = {
  category: string;
  content: string;
  date: number;
  memberId: number;
  role: "ROLE_USER" | "ROLE_ADMIN";
};

export type Attendace = {
  date: string;
  email: string;
  id: number;
  isGo: boolean;
  name: string;
};
