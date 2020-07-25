import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/core";
import styled from "@emotion/styled";

//Header Container
export const HeaderContainer = styled(Flex)`
  background: #fff;
  height: 5rem;
  width: 100%;
`;

//Logo Container
export const LogoContainer = styled(Flex)`
  width: 20%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

//Nav Container
export const NavContainer = styled(Flex)`
  width: 60%;
  padding: 1.6rem 0 0 0;
  justify-content: center;
`;

//Content container
export const AvatarContainer = styled(Flex)`
  width: 20%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

//NavLink Styles
export const HeaderNavLink = styled(NavLink)`
  color: #808998;
  margin: 0 1rem;
  display: flex;
  align-content: center;
  padding: 0;
  font-size: 20px;

  :hover {
    color: #2060da;
    border-bottom: 2px solid #2060da;
  }
  &.active-link {
    color: #2060da;
    border-bottom: 2px solid #2060da;
  }
`;
