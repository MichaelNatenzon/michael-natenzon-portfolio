import React, { useEffect, useState } from "react";

import { LoginIcon } from "./NavbarIcon";

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

const Navbar = ({
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
            <NavLinks
              to="slideshow"
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
            >
              Home
            </NavLinks>
          </NavItem>
        </NavMenuNonMobile>
        <Spacer />
        <NavMenu>
          <NavItem>
            <NavLinks to="experience" duration={500} spy={true} exact="true">
              {navbarContent["FirstSectionAnchor"]}
            </NavLinks>
          </NavItem>
        </NavMenu>
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

export default Navbar;
