"use client";
import { useSWRConfig } from "swr";

// Fetcher 구현.
// 추가 인수는 두 번째 매개변수의 `arg` 속성을 통해 전달됩니다.
// 아래 예제에서 `arg`는 `'my_token'`이 됩니다.
async function updateUser(url: string) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      id: 1,
      name: "Jiyoon",
      email: "jiyoon@example.com",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
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
