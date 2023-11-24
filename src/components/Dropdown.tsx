import { Dropdown } from "flowbite-react";

import Link from "next/link";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  image: string;
  username: string;
};
export default function Test({ image, username }: Props) {
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="w-10 h-10 rounded-full"
          src={image ?? undefined}
          alt="Rounded avatar"
          referrerPolicy="no-referrer"
        />
      )}
    >
      <Dropdown.Item>
        <Link href={`/user/${username}`}>마이페이지</Link>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => signOut()}>로그아웃</Dropdown.Item>
    </Dropdown>
  );
}
