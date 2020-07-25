import React from "react";

//Styles
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0;
`;

//Interface
interface Props {
  children: React.ReactNode;
}

//Page Layout
const Layout = ({ children }: Props) => {
  return (
    <>
      
      <LayoutContainer>
        <div>{children}</div>
      </LayoutContainer>
    </>
  );
};

export default Layout;
