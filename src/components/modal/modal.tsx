"use-client";

import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import {
  StyledModal,
  ModalOverlay,
  ModalWrapper,
  ModalCloseButton,
  ModalBody,
  ModalContent,
} from "./modal.styles";

type ModalProps = {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (param: boolean) => void;
};

export const Modal = ({ children, showModal, setShowModal }: ModalProps) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // @todo fix so the site is not locked on the top when the modal is open

  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "100%";
    }
  }, [showModal]);

  React.useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, [setShowModal]);

  React.useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      const modal = modalRef.current;
      if (modal === null) return;
      const focusableModalElements = modal.querySelectorAll("a[href], button");
      const firstElement = focusableModalElements[0] as HTMLElement;
      const lastElement = focusableModalElements[
        focusableModalElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey && focusableModalElements.length === 1) {
        firstElement.focus();
        return e.preventDefault();
      }

      if (!e.shiftKey && document.activeElement !== firstElement) {
        firstElement.focus();
        return e.preventDefault();
      }

      if (e.shiftKey && document.activeElement !== lastElement) {
        lastElement.focus();
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleTabKey);

    return () => document.removeEventListener("keydown", handleTabKey);
  }, [showModal]);

  return isMounted && showModal
    ? ReactDOM.createPortal(
        <StyledModal role="dialog" aria-modal="true" ref={modalRef}>
          <ModalOverlay />
          <ModalWrapper>
            <ModalBody>
              <ModalCloseButton
                type="button"
                onClick={() => setShowModal(false)}
              />
              <ModalContent>{children}</ModalContent>
            </ModalBody>
          </ModalWrapper>
        </StyledModal>,
        document.body
      )
    : null;
};
