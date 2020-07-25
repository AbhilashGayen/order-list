import React from "react";

//Styles
import {
  Icon,
  Avatar,
  MenuList,
  MenuButton,
  Menu,
  MenuItem,
} from "@chakra-ui/core";

//Content for Header
const Content = () => {
  return (
    <>
      <Icon name="bell" size="24px" mx="10" color="#808998" />
      <Avatar
        showBorder
        borderColor="#808998"
        bg="#fff"
        p={1}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
      />
      <Menu>
        <MenuButton
          ml={3}
          transition="all 0.2s"
          rounded="sm"
          bg="#fff"
          border="none"
          _hover={{ bg: "#fff" }}
          _expanded={{ bg: "red.200" }}
          _focus={{ outline: 0 }}
        >
          <Icon name="chevron-down" />
        </MenuButton>
        <MenuList>
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Content;
