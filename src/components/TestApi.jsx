"use client";
import React from "react";
import useSWR from "swr";

export default function TestApi() {
  const { data } = useSWR("/api/me");
  console.log(data);
  const register = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");
    myHeaders.append("Cache-Control", "no-store");

    const raw = JSON.stringify({
      account: "abc123",
      password: "password",
      nickname: "junho",
      name: "junho",
      email: "junho5336@gmail.com",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");

    var raw = JSON.stringify({
      email: "junho5336@gmail.com",
      password: "password",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
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
    fetch("http://localhost:8080/login/oauth2/code/kakao", {
      method: "POST",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="absolute">
        <button
          onClick={register}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          회원가입 테스트
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
      </div>
    </>
  );
}
