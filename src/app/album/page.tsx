"use client";

import { useEffect, useState } from "react";
import AlbumModal from "@/components/AlbumModal";
import { useLoadingState } from "@/context/LoadingContext";
import { useUserState } from "@/context/UserContext";
import { getAlbum, sendTokenToFlask } from "@/services/album";

const imgPath = [
  "https://images.unsplash.com/photo-1559659133-8781d8f3b673?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1571017659487-8435d954545e?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583356230736-b5b9ecb85605?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546015720-e7171de00439?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561567131-f7d83083aee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://image.ytn.co.kr/general/jpg/2017/0104/201701041140063243_d.jpg",
  "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://cdn.kormedi.com/wp-content/uploads/2022/02/ck_tica0340000964_l-768x512.jpg",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596252732610-fce5ac542f8e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596034640116-a68045d257fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function AlbumPage() {
  const { user } = useUserState();
  const [images, setImages] = useState<string[] | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imgType, setImgType] = useState<"path" | "base64" | null>(null);
  const [targetImage, setTargetImage] = useState<string | null>(null);
  const { setIsLoading } = useLoadingState();
  const imageModalHandler = (image: string, type: "path" | "base64") => {
    setOpenModal(true);
    setTargetImage(image);
    setImgType(type);
  };
  useEffect(() => {
    if (user?.memberId) {
      setIsLoading(true);
    }
    sendTokenToFlask(user?.memberId).then(() => {
      getAlbum()
        .then((res) => {
          setImages(res);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  }, [user]);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 lg:max-w-4xl md:max-w-3xl sm:max-w-2xl w- mx-auto md:px-10">
      <AlbumModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        targetImage={targetImage}
        imgType={imgType}
      />

      <div className="mt-5 grid grid-cols-2 gap-4">
        {images &&
          images.map((image, index) => (
            <img
              onClick={() => imageModalHandler(image, "base64")}
              key={index}
              src={`data:image/jpg;base64,${image}`}
              alt="album image"
              className="object-cover h-60 w-full rounded-lg"
            />
          ))}
        {imgPath.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="album image"
            className="object-cover h-60 w-full rounded-lg"
            onClick={() => imageModalHandler(image, "path")}
          />
        ))}
      </div>
    </div>
  );
}
