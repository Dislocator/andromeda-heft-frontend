import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaPatreon } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Informamation</FooterLinkTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/signin">Sign In</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/generator">Generator</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Socials</FooterLinkTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/signin">Sign In</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/generator">Generator</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrap>
            <SocialLogo to="/">Andromeda </SocialLogo>
            <WebsiteRights>Andromeda © {new Date().getFullYear} </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://patreon.com"
                target="patreon.com"
                aria-label="Instagram"
              >
                <FaPatreon />
              </SocialIconLink>
              <SocialIconLink
                href="github.com"
                target="github.com"
                aria-label="Instagram"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="facebook.com"
                target="facebook.com"
                aria-label="Instagram"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="instagram.com"
                target="instagram.com"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
