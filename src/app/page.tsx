import React from "react";

export default function page() {
  return (
    <>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        style={{ width: "500px", height: "500px" }}
        src={require("../assets/videos/baby.mp4")}
      />
    </>
  );
}
