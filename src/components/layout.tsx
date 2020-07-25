import React from "react";

//Components
import Header from "./header/header";

//Styles
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0;
`;

//Interface
interface Props {
  children: any;
}

//Page Layout
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <div>{children}</div>
      </LayoutContainer>
    </>
  );
};

export default Layout;
