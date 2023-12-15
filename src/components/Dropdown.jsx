import { Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ParentAvatar from "@/assets/images/parent_avatar.png";
import SitterAvatar from "@/assets/images/sitter_avatar.png";
import { useUserState } from "@/context/UserContext";
import { logout } from "@/services/auth";
import { clearToken } from "@/utils/token";

export default function DropdownCom(role) {
  const router = useRouter();
  const { setUser } = useUserState();

  const logoutHandler = async () => {
    logout().finally(() => {
      clearToken();
      router.push("/");
      setUser(null);
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
