import React from "react";
import Timeline from "./Timeline";
import { TimelineResponse } from "@/types";

type Prop = {
  timelines?: TimelineResponse[];
};
export default function TimelineList({ timelines }: Prop) {
  return (
    <>
      <ol className="overflow-hidden relative border-s border-gray-200 dark:border-gray-700">
        {timelines &&
          timelines.map((timeline, index) => (
            <li key={index} className="mb-5 ms-4">
              <Timeline {...timeline} />
            </li>
          ))}
      </ol>
    </>
  );
}
