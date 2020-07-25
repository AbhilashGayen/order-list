import React from "react";

//Context
import DataContextProvider from "../utils/dataContext";

//Layout
import Layout from "../components/layout";

//Components
import PageHeading from "../components/pageHeading";
import OrderTabs from "../components/orderTable/orderTabs";

const OrderPage = () => (
  <Layout>
    <PageHeading />
    <DataContextProvider>
      <OrderTabs />
    </DataContextProvider>
  </Layout>
);

export default OrderPage;
