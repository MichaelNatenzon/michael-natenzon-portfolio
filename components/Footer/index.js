import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";

import { FooterContainer, FooterContent } from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollTo(0, {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };
  return (
    <div>
      <FooterContainer>
        <FooterContent to="/" onClick={toggleHome}>
          Michael Natenzon. All rights reserved.
          <br />
          Copyright © {new Date().getFullYear()}
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Footer;
