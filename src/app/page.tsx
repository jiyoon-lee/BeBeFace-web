import Image from "next/image";
import React from "react";
import BeLogo from "@/assets/images/mainpage/belogo.png";

export default function page() {
  return (
    <div>
      <header>
        <div className="inner">
          <h1>
            <a href="/">
              <Image src={BeLogo} alt="logo" />
            </a>
          </h1>
          <ul className="gnb">
            <li>
              <a href="#">홈</a>
            </li>
            <li>
              <a href="#">베베타임라인</a>
            </li>
            <li>
              <a href="#">베베캘린더</a>
            </li>
            <li>
              <a href="#">베베앨범</a>
            </li>
          </ul>
        </div>
      </header>
      <figure>
        <video src="../assets/videos/baby.mp4" autoPlay muted loop></video>
        <div className="inner">
          <h1>BeBeFace</h1>
        </div>
      </figure>
    </div>
  );
}
