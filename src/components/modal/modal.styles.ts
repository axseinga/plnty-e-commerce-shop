import styled from "styled-components";

export const StyledModal = styled.div``;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  background-image: url("/assets/close-button.svg");
  background-repeat: no-repeat;
  top: 25px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  z-index: 1100;
`;

export const ModalBody = styled.div`
  background-color: var(--color-white);
  border: 3px double var(--color-primary);
  padding: 1rem;
  position: relative;
`;

export const ModalContent = styled.div`
  max-width: 35rem;
  padding: 2.5rem;
`;
