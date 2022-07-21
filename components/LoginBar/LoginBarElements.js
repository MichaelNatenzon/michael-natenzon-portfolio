import styled from "styled-components";
import { motion } from "framer-motion";

export const LoginBarContainer = styled(motion.div)`
  background: #12162b;
  height: 205px;
  display: flex;
  align-items: bottom;
  font-size: 1rem;
  position: fixed;
  width: 200px;
  right: 0;
  top: 45px;
  margin-right: 2px;
  padding-top: 12px;
  z-index: 9;
  color: #fff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const LoginLi = styled(motion.li)`
  color: #fff;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  padding-left: 15px;
  grid-row-gap: 20px;
  padding-top: 7px;
  padding-bottom: 7px;

  justify-items: left;
  align-items: center;

  &:hover {
    background-color: #21274a;
    border-radius: 7px;
  }
`;

export const LoginLiIcon = styled.img`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 1;
`;

export const LoginLiText = styled.div`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 2;
  grid-column-end: 2;
  line-height: 20px;
  padding-left: 5px;
`;

export const WhyLoginLi = styled(motion.li)`
  color: #fff;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  padding-top: 7px;
  font-weight: 300;
`;

export const WhyLoginButton = styled(motion.button)`
  color: #fff;
  text-align: center;
  background: transparent;
  border: transparent;
`;
