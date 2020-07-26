import React from "react";

//Image
import { Dots } from "../assets/svg";

//Styles
import { Flex, Box } from "@chakra-ui/core";
import { HeadingContainer, Button } from "../styles/pageHeadingStyles";

//Page Heading
const PageHeading = () => (
  <HeadingContainer>
    <h1>Orders list</h1>
    <Flex align="center">
      <Box pt={1}>
        <Dots />
      </Box>
      <Button>Create Order</Button>
    </Flex>
  </HeadingContainer>
);

export default PageHeading;
