import React from "react";

type Props = { image?: string | null };
export default function Avatar({ image }: Props) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-10 h-10 rounded-full"
        src={image ?? undefined}
        alt="Rounded avatar"
        referrerPolicy="no-referrer"
      ></img>
    </div>
  );
}
