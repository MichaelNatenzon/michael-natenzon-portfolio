import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sidebarContents } from "./Data";

import {
  SidebarLi,
  SidebarLiTitle,
  SidebarLiTitleContainer,
  SidebarLiIcon,
  SidebarLiText,
} from "./SidebarElements";

const variantsNav = {
  open: {
    clipPath: `circle(1000px at 20px 20px)`,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  closed: {
    clipPath: `circle(0px at 20px 20px)`,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0,
    },
  },
};

const variantsList = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.8,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      delayChildren: 0.6,
      staggerChildren: 0.8,
    },
  },
};

const variantsItem = {
  hidden: { x: -5, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    delay: 0.4,
  },
};

const SidebarContent = ({ variants }) => {
  return (
    <div>
      {sidebarContents.map(({ name, link, icon_src, target }, index) => (
        <SidebarLi
          variants={variants}
          key={index.toString()}
          id={index.toString()}
        >
          <SidebarLiIcon src={icon_src} />

          <SidebarLiText href={link} target={target} rel="noreferrer">
            {name}
          </SidebarLiText>
        </SidebarLi>
      ))}
    </div>
  );
};

const Sidebar = ({ isOpen, countOpen }) => {
  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variantsNav}
      style={{
        zIndex: 5,
        backgroundColor: "#12162b",
        left: 0,
        top: 0,
        position: "fixed",
        color: "#fff",
        height: "100%",
        width: "300px",
        display: "block",
        paddingRight: "35px",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={variantsList}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              delay: 0.1,
              duration: 0.1,
              transition: { when: "beforeChildren" },
            }}
            transition={{
              type: "spring",
              stiffness: 10,
              damping: 10,
              mass: 8,
            }}
            style={{
              listStyleType: "none",
              lineHeight: "50px",
              paddingTop: "20px",
            }}
            key={countOpen}
          >
            <SidebarLiTitleContainer variants={variantsItem} id={0}>
              <SidebarLiTitle>Professional Work</SidebarLiTitle>
            </SidebarLiTitleContainer>
            <SidebarContent variants={variantsItem} />
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Sidebar;
