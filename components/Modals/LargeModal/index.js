import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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
    <motion.div style={{ width: "100%" }}>
      <AnimatePresence>
        {showState && (
          <motion.div
            style={{
              zIndex: "99",
              position: "absolute",
              backgroundColor: "rgb(0 0 0 / 32%)",
              justifyContent: "center",
              alignItems: "start",
              width: "100%",
              height: "100%",
              left: "0",
              top: "0",
              display: "flex",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, when: "afterChildren" },
            }}
          >
            <motion.div
              style={{
                width: modalWidth,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginTop: "12vh",
                height: modalHeight,
                paddingBottom: "30px",
              }}
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
              <div style={{ display: "flex", justifyContent: "right" }}>
                <button onClick={closeToggle} style={{ color: "#000" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {modalContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
