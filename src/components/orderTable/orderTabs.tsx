import React, { useState } from "react";

//Styles
import { Tabs, TabPanel, TabPanels } from "@chakra-ui/core";
import { TabHeaderContainer, TabHeader } from "../../styles/orderStyles";

//Component
import OrderRow from "./orderRow";

const OrderTabs = () => {
  const [filterType, setFilterType] = useState("none");

  return (
    <Tabs>
      <TabHeaderContainer>
        <TabHeader onClick={() => setFilterType("none")}>All Orders</TabHeader>
        <TabHeader onClick={() => setFilterType("none")}>Active</TabHeader>
        <TabHeader onClick={() => setFilterType("unpaid")}>Unpaid</TabHeader>
        <TabHeader onClick={() => setFilterType("unfulfilled")}>
          Unfullfilled
        </TabHeader>
      </TabHeaderContainer>

      <TabPanels>
        <TabPanel>
          <OrderRow filter={filterType} />
        </TabPanel>
        <TabPanel>
          <OrderRow filter={filterType} />
        </TabPanel>
        <TabPanel>
          <OrderRow filter={filterType} />
        </TabPanel>
        <TabPanel>
          <OrderRow filter={filterType} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default OrderTabs;
