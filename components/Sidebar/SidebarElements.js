import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarLi = styled(motion.li)`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  grid-row-gap: 100px;
  height: 70px;

  justify-items: left;
  align-items: center;

  &:hover {
    background-color: #21274a;
    border-radius: 7px;
    padding-left: 10px;
  }
`;

export const SidebarLiTitleContainer = styled(motion.li)`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  grid-row-gap: 100px;
  height: 60px;

  justify-items: left;
  align-items: center;
`;

export const SidebarLiTitle = styled.h3`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  padding-bottom: 5px;
  margin-left: -5px;
  font-size: 28px;
  font-weight: 400;
`;

export const SidebarLiIcon = styled.img`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 1;
  padding-right: 10px;
`;

export const SidebarLiText = styled.a`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 2;
  grid-column-end: 2;
  line-height: 20px;
`;
