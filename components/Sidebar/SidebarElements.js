import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarContainer = styled(motion.nav)`
  z-index: 5;
  background-color: #12162b;
  left: 0;
  top: 0;
  position: fixed;
  color: #fff;
  height: 100%;
  width: 300px;
  display: block;
  padding-right: 35px;
  border: grey solid;
  border-width: 0px 2px 0px 0px;
`;

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
  margin-top: 40px;

  @media screen and (max-width: 1200px) {
    margin-top: 52px;
  }

  justify-items: left;
  align-items: center;
`;

export const SidebarListContainer = styled.div``;

export const SidebarList = styled(motion.ul)`
  list-style-type: none;
  line-height: 50px;
  padding-top: 20px;
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

export const SidebarProfessionalLinks = styled.div`
  position: absolute;
  bottom: 30px;
  width: 300px;
  left: 0;
  justify-content: center;
  text-align: center;
`;
