import React from "react";

//Styles
import { Checkbox } from "@chakra-ui/core";
import { TableHeaderContainer } from "../../styles/orderStyles";

//Header row for order table
const TableHeader = () => {
  return (
    <TableHeaderContainer>
      <div className="cell checkbox">
        <Checkbox border="1px" borderRadius="md" borderColor="gray.200" />
      </div>
      <div className="cell order_id">Order ID</div>
      <div className="cell created_date">Created</div>
      <div className="cell customer">Customer</div>
      <div className="cell fulfillment">Fulfillment</div>
      <div className="cell total">Total</div>
      <div className="cell profit">Profit</div>
      <div className="cell status">Status</div>
      <div className="cell updated">Updated</div>
    </TableHeaderContainer>
  );
};

export default TableHeader;
