import React from "react";
import { Link } from "react-router-dom";

//Components
import NavLinks from "./navLinks";
import Content from "./content";

//Styles
import { Image } from "@chakra-ui/core";
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  AvatarContainer,
} from "../../styles/headerStyles";

//Logo
import Logo from "../../assets/images/cube.png";

//Header Component
const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/orders">
          <Image size="25px" objectFit="cover" src={`${Logo}`} alt="Company" />
        </Link>
      </LogoContainer>
      <NavContainer>
        <NavLinks />
      </NavContainer>
      <AvatarContainer>
        <Content />
      </AvatarContainer>
    </HeaderContainer>
  );
};

export default Header;
