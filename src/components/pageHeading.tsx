import React from "react";

//Image
import { Dots } from "../assets/svg";

//Styles
import { Flex, Heading, Button } from "@chakra-ui/core";
import styled from "@emotion/styled";

const HeadingContainer = styled(Flex)`
  margin: 3rem 0;
  justify-content: space-between;
  align-items: center;
`;

//Page Heading
const PageHeading = () => (
  <HeadingContainer>
    <Heading as="h4">Orders list</Heading>
    <Flex align="center">
      <Dots />
      <Button ml={5} border="none" size="lg" variantColor="blue">
        Create Order
      </Button>
    </Flex>
  </HeadingContainer>
);

export default PageHeading;
