import React from "react";

import { Checkbox, Heading } from "@chakra-ui/core";
import { TableHeaderContainer, Cell } from "../../styles/orderStyles";

const TableHeader = () => {
  return (
    <TableHeaderContainer>
      <Cell>
        <Checkbox border="1px" borderRadius="md" borderColor="gray.200" />
      </Cell>
      <Cell className="order-id">
        <Heading as="h6" size="sm">
          Order ID
        </Heading>
      </Cell>
      <Cell>
        <Heading as="h6" size="sm">
          Created
        </Heading>
      </Cell>
      <Cell>
        <Heading as="h6" size="sm">
          Customer
        </Heading>
      </Cell>
      <Cell>
        <Heading as="h6" size="sm">
          Fulfillment
        </Heading>
      </Cell>
      <Cell>
        <Heading as="h6" size="sm">
          Total
        </Heading>
      </Cell>
      <Cell>
        <Heading as="h6" size="sm">
          Profit
        </Heading>
      </Cell>
      <Cell>
        <Heading as="h6" size="sm">
          Status
        </Heading>
      </Cell>
      <Cell>
        <Heading as="h6" size="sm">
          Updated
        </Heading>
      </Cell>
    </TableHeaderContainer>
  );
};

export default TableHeader;
