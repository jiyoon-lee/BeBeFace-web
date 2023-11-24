"use client";

import React, { useCallback, useRef } from "react";

export default function TestTestTest() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsInJvbGVzIjpbeyJuYW1lIjoiUk9MRV9CQUJZQ0FSRSJ9XSwiaWF0IjoxNzAwODA5MTc3LCJleHAiOjE3MDA4MTI3Nzd9.u2ozmu9vkdzwRLJjrkCGKzcZv7-WaDWFC40ZTRM6Eyk"
      );

      const formdata = new FormData();
      formdata.append("image", e.target.files[0], "[PROXY]");

      fetch("http://localhost:8080/image", {
        method: "POST", // *GET, POST, PUT, DELETE 등
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: { "Content-Type": "application/json" },
        body: formdata,
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
    []
  );

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onUploadImage}
      />
      <button onClick={onUploadImageButtonClick}>버튼</button>
    </>
  );
}
