//Styles
import styled from "@emotion/styled";
import { Flex, TabList, Tab } from "@chakra-ui/core";

//Tab Styles
export const TabHeaderContainer = styled(TabList)`
  background: transparent;
  color: #808998;
  border: none;
  border-bottom: 2px solid #BCC0C8;
`;

export const TabHeader = styled(Tab)`
  background: transparent;
  font-size: 1.3rem;
  padding: 1rem;
  font-weight: 400;
  color: #808998;
  outline: none;
  border: none;
  border-bottom: 2px solid transparent;
  :hover {
    color: #808998;
  }
  &:active {
    color: #2060da;
    outline: none;
    border-bottom: 2px solid #2060da;
  }
`;

//Row Styles
export const RowContainer = styled(Flex)`
  margin: 1rem 0.5rem;
  padding: 0.2rem 1rem;
  width: 100%;
  border: 2px solid #e2e8f0;
  border-radius: 5px;
  background: #fff;

  > :nth-child(1) {
    width: 4%;
  }
  > :nth-child(2) {
    width: 10%;
  }
  > :nth-child(3) {
    width: 10%;
  }
  > :nth-child(4) {
    padding-left: 10px;
    width: 20%;
    justify-content: flex-start;
  }
  > :nth-child(5) {
    width: 14%;
  }
  > :nth-child(6) {
    width: 10%;
  }
  > :nth-child(7) {
    width: 10%;
  }
  > :nth-child(8) {
    width: 14%;
  }
  > :nth-child(9) {
    width: 10%;
  }
`;

export const Cell = styled(Flex)`
  margin: 0.5rem 0.2rem;
  padding: 0 0.2rem;
  align-items: center;
  justify-content: center;
`;
