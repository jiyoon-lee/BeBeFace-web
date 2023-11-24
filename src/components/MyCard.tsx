"use client";

import { Card } from "flowbite-react";

type Props = {
  children: React.ReactNode;
};
export default function MyCard({ children }: Props) {
  return <Card className="w-96">{children}</Card>;
}
