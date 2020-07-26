import React from "react";

//Context
import DataContextProvider from "../utils/dataContext";

//Layout
import Layout from "../components/layout";

//Components
import PageHeading from "../components/pageHeading";
import OrderTabs from "../components/order/orderTabs";
import Charts from "../components/chart/charts";

const OrderPage = () => (
  <Layout>
    <PageHeading />
    <DataContextProvider>
      <Charts />
      <OrderTabs />
    </DataContextProvider>
  </Layout>
);

export default OrderPage;
