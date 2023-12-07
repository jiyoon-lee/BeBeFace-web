import React from "react";

export default function BabyInfo() {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        BabyInfo Tab
      </h3>
      <p className="mb-2">
        This is some placeholder content the Profile tabs associated content,
        clicking another tab will toggle the visibility of this one for the
        next.
      </p>
      <p>
        The tab JavaScript swaps classNamees to control the content visibility
        and styling.
      </p>
    </>
  );
}
