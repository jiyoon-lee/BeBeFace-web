"use client";
import { useSWRConfig } from "swr";
export default function TestTestTest() {
  const { mutate } = useSWRConfig();
  return (
    <>
      <button
        onClick={() => {
          console.log("들어오긴 했나");
          // 특정 인수를 사용하여 `updateUser`를 트리거 합니다.
          mutate(
            "/api/user",
            {
              id: 1,
              name: "Jiyoon",
              email: "jiyoon@example.com",
            },
            false
          );
        }}
      >
        Update User
      </button>
    </>
  );
}
