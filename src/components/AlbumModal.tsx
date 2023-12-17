import { Modal } from "flowbite-react";
import React from "react";

export default function AlbumModal({
  openModal,
  setOpenModal,
  targetImage,
  imgType,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  targetImage: string | null;
  imgType: "path" | "base64" | null;
}) {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        {targetImage && (
          <img
            src={`${
              imgType === "base64" ? "data:image/png;base64," : ""
            }${targetImage}`}
            alt="album image"
            className="object-cover h-80 w-full rounded-lg"
          />
        )}
      </Modal.Body>
    </Modal>
  );
}
