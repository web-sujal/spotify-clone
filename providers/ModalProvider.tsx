"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        isOpen
        onChange={() => {}}
        title={"test title"}
        description={"test desc"}
      >
        test children
      </Modal>
    </>
  );
};

export default ModalProvider;
