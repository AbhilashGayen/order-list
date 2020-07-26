import React, { useState } from "react";

//Styles
import {
  TabContainer,
  TabFilter,
  FilterConainter,
} from "../../styles/orderStyles";

//Component
import OrderRow from "./orderRow";
import { Icon } from "@chakra-ui/core";

const OrderTabs = () => {
  const [filterType, setFilterType] = useState("none");

  return (
    <>
      <TabContainer>
        <FilterConainter>
          <TabFilter onClick={() => setFilterType("none")}>
            All Orders
          </TabFilter>
          <TabFilter onClick={() => setFilterType("none")}>Active</TabFilter>
          <TabFilter onClick={() => setFilterType("unpaid")}>Unpaid</TabFilter>
          <TabFilter onClick={() => setFilterType("unfulfilled")}>
            Unfullfilled
          </TabFilter>
        </FilterConainter>
        <FilterConainter>
          <TabFilter  onClick={() => setFilterType("none")}>
            <Icon name="search" size="22px" />
          </TabFilter>
        </FilterConainter>
      </TabContainer>
      <OrderRow filter={filterType} />
    </>
  );
};

export default OrderTabs;
