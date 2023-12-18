"use client";
import { Label, Textarea, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import TimelineList from "@/components/TimelineList";
import { useAlertState } from "@/context/AlertContext";
import { useLoadingState } from "@/context/LoadingContext";
import { useUserState } from "@/context/UserContext";
import { setDiary } from "@/services/diary";
import { TimelineResponse } from "@/types";
import { CurrentDateTime } from "@/utils/currentDateTime";

export default function TimelinePage() {
  const { setIsLoading } = useLoadingState();
  const { setAlert } = useAlertState();
  const { user } = useUserState();
  const date = new CurrentDateTime();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);
  const [timelines, setTimelines] = useState<TimelineResponse[]>();
  const { data, isLoading } = useSWR<TimelineResponse[]>(
    `/timelines?dateTime=${date.getDateDash()}`
  );
  setIsLoading(isLoading);
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) setTimelines(data.reverse());
  }, [data]);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setDiary({ file, title, content }).finally(() => {
      setAlert({ type: "success", message: "다이어리가 추가되었습니다." });
      setContent("");
      setFile(undefined);
      setTitle("");
      if (fileRef.current) fileRef.current.value = "";
      setIsLoading(false);
    });
  };
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    setFile(files);
  };
  const current = new CurrentDateTime();
  return (
    <div className="lg:max-w-4xl md:max-w-3xl sm:max-w-2xl  m-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:pb-32 pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base text-center font-semibold leading-7 text-indigo-600">
              하루일기로 우리 아이의 일상을 담아요.
            </h2>
            <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
              {current.getDate()}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
            <dl className="grid max-w-xl gap-x-8 gap-y-10 lg:max-w-none grid-cols-2 lg:gap-y-16">
              <div className="relative lg:pl-16">
                {timelines ? (
                  <TimelineList timelines={timelines} />
                ) : (
                  <p className="text-lg">타임라인이 존재하지 않습니다.</p>
                )}
              </div>
              <div className="relative lg:pl-16">
                {user?.authority === "ROLE_ADMIN" && (
                  <form onSubmit={submitHandler}>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="제목" />
                      </div>
                      <TextInput
                        id="name"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mt-2.5">
                      <div className="sm:col-span-2">
                        <Label htmlFor="message" value="내용" />
                        <Textarea
                          name="message"
                          id="message"
                          rows={6}
                          value={content}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setContent(e.target.value)}
                        />
                        <input
                          className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="file_input"
                          type="file"
                          ref={fileRef}
                          onChange={fileHandler}
                        />
                      </div>
                      <div className="mt-5">
                        <button
                          disabled={!(content && title)}
                          type="submit"
                          className={`${
                            content && title
                              ? "bg-yellow-dark hover:bg-yellow-deepDark"
                              : "bg-gray-300"
                          } block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                        >
                          등록
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
