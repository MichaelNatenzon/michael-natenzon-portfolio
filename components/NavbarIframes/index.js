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
  navbarContent,
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
            <NavLinks href="/">Home</NavLinks>
          </NavItem>
        </NavMenuNonMobile>
        <Spacer />
        <NavMenu>
          <NavItem>
            <NavExternalLinks onClick={toggle}>
              {navbarContent["SideMenuToggle"]}
            </NavExternalLinks>
          </NavItem>
        </NavMenu>
        <Spacer />
        <NavMenuNonMobile>
          <NavItem>
            <NavExternalLinks>
              <a
                href={navbarContent["ExternalLink"]["Url"]}
                target="_blank"
                rel="noreferrer"
              >
                {navbarContent["ExternalLink"]["Text"]}
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
