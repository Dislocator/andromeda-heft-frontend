import React, { useState, useEffect } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(actions.openSidebar());
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      console.log(window.scrollY);
      setScrollNav(false);
    }
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const toggleGenerator = () => {
    dispatch(actions.openGeneratorForm());
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Andromeda
          </NavLogo>
          <MobileIcon onClick={() => handleSidebar()}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="generator-form"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={() => toggleGenerator()}
              >
                Generator
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Preise
              </NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
