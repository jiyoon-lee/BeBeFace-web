import { Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ParentAvatar from "@/assets/images/parent_avatar.png";
import SitterAvatar from "@/assets/images/sitter_avatar.png";
import { useAuthContext } from "@/context/AuthContext";
import { logout } from "@/services/auth";

export default function DropdownCom(role) {
  const router = useRouter();
  const { setIsLogin, setUserInfo } = useAuthContext();
  const logoutHandler = () => {
    logout().finally(() => {
      setIsLogin(false);
      setUserInfo(null);
      router.push("/");
    });
  };
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => (
        <Image
          src={role === "ROLE_USER" ? SitterAvatar : ParentAvatar}
          className="w-12 h-12 rounded-full border-2"
          alt="Rounded avatar"
          referrerPolicy="no-referrer"
        />
      )}
    >
      <Dropdown.Item>
        <Link href={`/my`}>마이페이지</Link>
      </Dropdown.Item>
      <Dropdown.Item onClick={logoutHandler}>로그아웃</Dropdown.Item>
    </Dropdown>
  );
}
