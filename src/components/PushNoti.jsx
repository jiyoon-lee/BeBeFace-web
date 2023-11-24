"use client";

import React from "react";

function PushNoti() {
  const pushNoti = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cache-Control", "no-store");
    myHeaders.append(
      "Authorization",
      "key=AAAAANVh6Cc:APA91bGmXsYiCNSKedtF_5TJhNcLTXZKi9ifM5XQ9dgft15zWP6bE10U9QslW6wNYxmsXS_4VVBrNgsGvg7teyRAR3xRVNhp3ZrdUGz72ofuL_hRv9gBDbeOdOEWsnBzJmOODGZRoHU9"
    );

    var raw = JSON.stringify({
      to: "fs7NioJcRParyR9TD0spX0:APA91bEFk7JicuuEsrtICo9s5ytgEGxE7poTh0v0Vic9cvbc9b-PCpSKh6casjKN1zRikhE18IQ9Y1fNlGkchpWJJF6_wBCiwshGHZCHvQ7up2O6xOAWsiQ_90QOvEDutM6LQSe7SLcU",
      notification: {
        body: "새로운9:45",
        title: "알림입니당",
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://fcm.googleapis.com/fcm/send", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <button
      onClick={pushNoti}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
    >
      알림 전송
    </button>
  );
}

export default PushNoti;
