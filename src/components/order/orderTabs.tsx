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

//Tabs to filter order data
const OrderTabs = () => {
  const [filterType, setFilterType] = useState("none");

  return (
    <>
      <TabContainer>
        <FilterConainter>
          <TabFilter
            className={filterType === "none" ? " active_tab" : ""}
            onClick={() => setFilterType("none")}
          >
            All Orders
          </TabFilter>
          <TabFilter
            className={filterType === "active" ? " active_tab" : ""}
            onClick={() => setFilterType("active")}
          >
            Active
          </TabFilter>
          <TabFilter
            className={filterType === "unpaid" ? " active_tab" : ""}
            onClick={() => setFilterType("unpaid")}
          >
            Unpaid
          </TabFilter>
          <TabFilter
            className={filterType === "unfulfilled" ? " active_tab" : ""}
            onClick={() => setFilterType("unfulfilled")}
          >
            Unfullfilled
          </TabFilter>
        </FilterConainter>
        <FilterConainter>
          <TabFilter>
            <Icon name="search" size="22px" />
          </TabFilter>
        </FilterConainter>
      </TabContainer>
      <OrderRow filter={filterType} />
    </>
  );
};

export default OrderTabs;
