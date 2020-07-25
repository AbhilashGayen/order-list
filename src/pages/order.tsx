import React from "react";
import Layout from "../components/layout";
import PageHeading from "../components/pageHeading";
import DataContextProvider from "../utils/dataContext";

const OrderPage = () => (
  <Layout>
    <DataContextProvider>
      <PageHeading />
    </DataContextProvider>
  </Layout>
);

export default OrderPage;
