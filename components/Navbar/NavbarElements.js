import styled from "styled-components";
// import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #12162b;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  color: #fff;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100%;
  margin: 0px 30px 0px 157px;
`;

export const NavMenuNonMobile = styled.ul`
  @media screen and (max-width: 600px) {
    display: none;
  }

  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0px;
`;

export const NavItem = styled.li`
  height: 53px;
`;

export const Spacer = styled.div`
  margin: 0px 6vw 0px 0px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-duration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #dee2e6;
  }
`;

export const NavExternalLinks = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-duration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #dee2e6;
  }
`;
