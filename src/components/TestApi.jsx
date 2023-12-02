"use client";
import React, { useState, useCallback, useRef } from "react";

export default function TestApi() {
  const [jwt, setJWT] = useState("");
  // const { data } = useSWR("/api/me");
  // console.log(data);
  const register1 = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");

    const raw = JSON.stringify({
      password: "password",
      name: "jiyoon",
      email: "jiyoon@example.com",
    });

    fetch("http://192.168.0.42:8080/auth/register", {
      method: "POST", // *GET, POST, PUT, DELETE 등
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const register2 = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");

    const raw = JSON.stringify({
      password: "password",
      name: "jiyoon",
      email: "jiyoon@example.com",
    });
    var requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE 등
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://192.168.0.42:8080/auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const getMe = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${jwt}`);
    myHeaders.append("Cache-Control", "no-store");

    fetch("http://192.168.0.42:8080/member/me", {
      headers: myHeaders,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");

    var raw = JSON.stringify({
      email: "jiyoon@example.com",
      password: "password",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.0.42:8080/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setJWT(result.accessToken);
      })
      .catch((error) => console.log("error", error));
  };

  const logout = () => {
    var raw = JSON.stringify({
      email: "test@email.com",
      password: "zxc!1234",
    });
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");

    var requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE 등
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/logout", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const oauthNoHeader = () => {
    fetch("http://192.168.0.42:8080/login/oauth2/code/kakao", {
      method: "POST",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const inputRef = useRef(null);

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }

    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${jwt}`);
    fetch("http://192.168.0.42:8080/video/upload", {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className="absolute">
        <button
          onClick={register1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          회원가입1 테스트
        </button>
        <button
          onClick={register2}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          회원가입2 테스트
        </button>
        <button
          onClick={getMe}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          내정보 테스트
        </button>
        <button
          onClick={login}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          로그인 테스트
        </button>
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          로그아웃 테스트
        </button>
        <button
          onClick={oauthNoHeader}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          카카오 로그인 테스트
        </button>
        <input type="file" accept="*" ref={inputRef} onChange={onUploadImage} />
      </div>
    </>
  );
}
