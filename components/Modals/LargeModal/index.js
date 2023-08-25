import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import {
  ModalContainer,
  ModalWrapper,
  ModalContentContainer,
  ModalContent,
  ModalCloseButtonContainer,
  ModalCloseButton,
} from "./LargeModalElements";

export const LargeModal = ({
  showState,
  showStateChangeCount,
  modalContent,
  closeToggle,
  modalWidth,
  modalHeight,
}) => {
  useEffect(() => {
    if (showState) {
      document.body.style.overflowY = "scroll";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.position = "static";
    }
  }, [showState]);
  return (
    <ModalContainer>
      <AnimatePresence>
        {showState && (
          <ModalWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, when: "afterChildren" },
            }}
          >
            <ModalContentContainer
              modalwidth={modalWidth}
              modalheight={modalHeight}
              initial={{ opacity: 1, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              exit={{
                opacity: 0,
                scale: 1,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                  when: "afterChildren",
                },
              }}
              key={showStateChangeCount}
            >
              <ModalCloseButtonContainer>
                <ModalCloseButton onClick={closeToggle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </ModalCloseButton>
              </ModalCloseButtonContainer>
              <ModalContent>{modalContent}</ModalContent>
            </ModalContentContainer>
          </ModalWrapper>
        )}
      </AnimatePresence>
    </ModalContainer>
  );
};
