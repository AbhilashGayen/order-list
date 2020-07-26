import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { Button } from "../styles/pageHeadingStyles";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 3rem;
    font-size: 4rem;
  }
  h3 {
    margin-bottom: 3rem;
    font-size: 2rem;
  }
`;

const OrderButton = styled(Button)`
  cursor: pointer;
`;

const ConstructionPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Page is under construction. :(</h1>
        <h3>Until then check out the order page.</h3>
        <Link to="/orders">
          <OrderButton>Go to orders</OrderButton>
        </Link>
      </Container>
    </Layout>
  );
};

export default ConstructionPage;
