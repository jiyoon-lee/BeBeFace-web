import React from "react";
import TimelineList from "@/components/TimelineList";
import { CurrentDateTime } from "@/utils/currentDateTime";

export default function TimelinePage() {
  const current = new CurrentDateTime();
  return (
    <div className="max-w-5xl m-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:pb-32 pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              하루일기로 우리 아이의 일상을 담아요.
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {current.getDate()}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <TimelineList time={current.getTime()} />
              </div>
              <div className="relative pl-16">
                <form>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-md font-semibold leading-6 text-gray-900"
                    >
                      하루일기
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                      <input
                        className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                      />
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        등록
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
