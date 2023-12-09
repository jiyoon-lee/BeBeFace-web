import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
  image: string | StaticImport;
  width: number;
};
export default function Avatar({ image, width }: Props) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        width={width}
        className="rounded-full"
        src={image}
        alt="Rounded avatar"
        referrerPolicy="no-referrer"
      ></Image>
    </div>
  );
}
