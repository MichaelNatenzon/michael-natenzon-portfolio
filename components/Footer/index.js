import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";

import { FooterContainer, FooterContent } from "./FooterElements";

const Footer = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          Michael Natenzon. All rights reserved.
          <br />
          Copyright © {new Date().getFullYear()}
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Footer;
