import styled from "styled-components";

import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
  width: 100%;
`;

export const ModalWrapper = styled(motion.div)`
  z-index: 99;
  position: absolute;
  background-color: rgb(0 0 0 / 32%);
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
`;

export const ModalContentContainer = styled(motion.div)`
  width: ${({ modalwidth }) => modalwidth};
  height: ${({ modalheight }) => modalheight};
  border-radius: 15px;
  background-color: #fff;
  margin-top: 12vh;
  padding-bottom: 30px;
`;

export const ModalCloseButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const ModalCloseButton = styled.button`
  color: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;
