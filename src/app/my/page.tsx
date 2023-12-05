import React from "react";
import SitterInfo from "@/components/SitterInfo";

export default function MyPage() {
  return (
    <div className="flex flex-wrap">
      <div className="border-e border-gray-200 dark:border-gray-700">
        <nav
          className="flex flex-col space-y-2"
          aria-label="Tabs"
          role="tablist"
          data-hs-tabs-vertical="true"
        >
          <button
            type="button"
            className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            id="vertical-tab-with-border-item-1"
            data-hs-tab="#vertical-tab-with-border-1"
            aria-controls="vertical-tab-with-border-1"
            role="tab"
          >
            Tab 1
          </button>
          <button
            type="button"
            className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="vertical-tab-with-border-item-2"
            data-hs-tab="#vertical-tab-with-border-2"
            aria-controls="vertical-tab-with-border-2"
            role="tab"
          >
            Tab 2
          </button>
          <button
            type="button"
            className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="vertical-tab-with-border-item-3"
            data-hs-tab="#vertical-tab-with-border-3"
            aria-controls="vertical-tab-with-border-3"
            role="tab"
          >
            Tab 3
          </button>
        </nav>
      </div>

      <div className="ms-3">
        <div
          id="vertical-tab-with-border-1"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-1"
        >
          <SitterInfo />
        </div>
        <div
          id="vertical-tab-with-border-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-2"
        >
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              second
            </em>{" "}
            items tab body.
          </p>
        </div>
        <div
          id="vertical-tab-with-border-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="vertical-tab-with-border-item-3"
        >
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              third
            </em>{" "}
            items tab body.
          </p>
        </div>
      </div>
    </div>
  );
}
