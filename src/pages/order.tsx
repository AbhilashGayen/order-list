import React, { Suspense, lazy } from "react";

//Context
import DataContextProvider from "../utils/dataContext";

//Layout
import Layout from "../components/layout";

//Components
import PageHeading from "../components/pageHeading";

//lazy loaded
const OrderTabs = lazy(() => import("../components/order/orderTabs"));
const Charts = lazy(() => import("../components/chart/charts"));

const OrderPage = () => (
  <Layout>
    <PageHeading />
    <DataContextProvider>
      <Suspense fallback={<div>Loading Charts...</div>}>
        <Charts />
      </Suspense>
      <Suspense fallback={<div>Loading Table...</div>}>
        <OrderTabs />
      </Suspense>
    </DataContextProvider>
  </Layout>
);

export default OrderPage;
