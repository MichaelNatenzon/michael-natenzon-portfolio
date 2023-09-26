import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";

import { FooterContainer, FooterContent } from "./FooterElements";

const Footer = ({ footerTopRow, footerBottomRow }) => {
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
        <FooterContent>
          <div
            to="/"
            onClick={toggleHome}
            dangerouslySetInnerHTML={{ __html: footerTopRow }}
          />
          <div dangerouslySetInnerHTML={{ __html: footerBottomRow }} />
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Footer;
