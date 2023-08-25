import styled from "styled-components";

import { motion } from "framer-motion";

export const UsernameContainer = styled.div`
  width: 190px;
  font-family: arial;
`;

export const UsernameButton = styled(motion.button)`
  margin-right: 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
`;

export const IconButtonContainer = styled.div``;

export const IconButton = styled(motion.button)`
  margin-right: 20px;
  margin-left: 137px;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #fff;
`;
