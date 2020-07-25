import React from "react";

//Components
import Header from "./header/header";

//Styles
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
`;

//Page Layout
const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
    </LayoutContainer>
  );
};

export default Layout;
