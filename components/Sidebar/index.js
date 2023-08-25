import React from "react";
import { AnimatePresence } from "framer-motion";

import { variantsNav, variantsList, variantsItem } from "./Animations";

import {
  SidebarContainer,
  SidebarListContainer,
  SidebarList,
  SidebarLi,
  SidebarLiTitle,
  SidebarLiTitleContainer,
  SidebarLiIcon,
  SidebarLiText,
  SidebarProfessionalLinks,
} from "./SidebarElements";

// List of Elements in Sidebar
const SidebarContent = ({ variants, sidebarElements }) => {
  return (
    <SidebarListContainer>
      {sidebarElements.map(({ name, link, icon_src, target }, index) => (
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
    </SidebarListContainer>
  );
};

// Entire Sidebar Element
const Sidebar = ({ isOpen, countOpen, sidebarContent }) => {
  return (
    <SidebarContainer
      animate={isOpen ? "open" : "closed"}
      variants={variantsNav}
    >
      <AnimatePresence>
        {isOpen && (
          <SidebarListContainer>
            <SidebarList
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
              key={countOpen}
            >
              <SidebarLiTitleContainer variants={variantsItem} id={0}>
                <SidebarLiTitle>{sidebarContent["Title"]}</SidebarLiTitle>
              </SidebarLiTitleContainer>
              <SidebarContent
                variants={variantsItem}
                sidebarElements={sidebarContent["Content"]}
              />
            </SidebarList>
            <SidebarProfessionalLinks>
              <a
                href="https://linkedin.com/in/michael-natenzon"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/MichaelNatenzon"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </SidebarProfessionalLinks>
          </SidebarListContainer>
        )}
      </AnimatePresence>
    </SidebarContainer>
  );
};

export default Sidebar;
