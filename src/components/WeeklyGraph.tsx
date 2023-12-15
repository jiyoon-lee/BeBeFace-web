"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type GraphData = { name: string; pv: number };
type Props = { data: GraphData[]; color: string; title: string };

export default function WeeklyGraph({ data, color, title }: Props) {
  return (
    <div className="max-w-sm pr-12 pb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="my-4 mx-5 text-xl tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <ResponsiveContainer height={250} width="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveEnd" />
          <YAxis interval="preserveEnd" />
          <Line type="monotone" dataKey="pv" stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
