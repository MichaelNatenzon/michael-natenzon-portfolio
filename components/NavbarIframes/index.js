import React, { useEffect, useState } from "react";

import { LoginIcon } from "./NavBarIcon";

import {
  NavbarContainer,
  Nav,
  NavMenu,
  NavMenuNonMobile,
  NavItem,
  NavLinks,
  NavExternalLinks,
  Spacer,
} from "./NavbarElements";

const NavbarIframePage = ({
  toggle,
  toggleLoginMenu,
  userDetails,
  setUserDetails,
  setLoginType,
}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavMenuNonMobile>
          <NavItem>
            <NavExternalLinks>
              <a href="/">Home</a>
            </NavExternalLinks>
          </NavItem>
        </NavMenuNonMobile>
        <Spacer />
        <NavMenu>
          <NavItem>
            <NavExternalLinks onClick={toggle}>Code Projects</NavExternalLinks>
          </NavItem>
        </NavMenu>
        <Spacer />
        <NavMenuNonMobile>
          <NavItem>
            <NavExternalLinks>
              <a
                href="https://www.theageofnano.com/"
                target="_blank"
                rel="noreferrer"
              >
                The Age of Nano
              </a>
            </NavExternalLinks>
          </NavItem>
        </NavMenuNonMobile>
      </NavbarContainer>
      <LoginIcon
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        setLoginType={setLoginType}
        toggleLoginMenu={toggleLoginMenu}
      />
    </Nav>
  );
};

export default NavbarIframePage;
