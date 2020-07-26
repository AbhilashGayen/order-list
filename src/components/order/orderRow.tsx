import React, { useContext, useState, useEffect, useRef } from "react";

//Context
import { DataContext } from "../../utils/dataContext";

//Style imports
import { Checkbox, Select, Text, Avatar, Heading } from "@chakra-ui/core";
import { RowContainer, Cell } from "../../styles/orderStyles";

//Components
import TableHeader from "./tableHeader";

//Local Interface
interface FilterProps {
  filter: string;
}

//Order Data
export const useData = () => useContext(DataContext);

//Set status value and background
//returns Select Component for status
const StatusSelector = (props: any) => {
  const [status, setStatus] = useState(props.status);
  const [bgcolor, setbgcolor] = useState(
    status === "Paid" ? "#39C38E" : "#FEA801"
  );
  const statusSelector = useRef() as React.MutableRefObject<HTMLSelectElement>;

  //update background and value on user selection
  const changeStatus = () => {
    let selectedStatus = statusSelector.current.value;
    setStatus(selectedStatus);
    setbgcolor(selectedStatus === "Paid" ? "#39C38E" : "#FEA801");
  };

  return (
    <Select
      backgroundColor={bgcolor}
      borderColor={bgcolor}
      color="white"
      defaultValue={status}
      onChange={changeStatus}
      ref={statusSelector}
    >
      <option value="Paid">Paid</option>
      <option value="Authorized">Authorized</option>
    </Select>
  );
};

//set fulfillment value and background
//returns Select Component for fulfillment
const FulfilmentSelector = (props: any) => {
  let bgcode: string = "#39C38E";

  const [fulfillment, setStatus] = useState(props.fulfillment);
  const [bgcolor, setbgcolor] = useState(
    fulfillment === "Fulfilled"
      ? "#39C38E"
      : fulfillment === "Unfulfilled"
      ? "#FEA801"
      : "#8D39C3"
  );
  const fulfillmentSelector = useRef() as React.MutableRefObject<
    HTMLSelectElement
  >;

  const setFulfillmentColor = (fulfillment: string) => {
    switch (fulfillment) {
      case "Fulfilled":
        bgcode = "#39C38E";
        break;
      case "Unfulfilled":
        bgcode = "#FEA801";
        break;
      case "Pending Receipt":
        bgcode = "#8D39C3";
        break;
      default:
        bgcode = "#39C38E";
    }
    setbgcolor(bgcode);
  };

  //update background and value on user selection
  const changeFulfillment = () => {
    let selectedFulfillment = fulfillmentSelector.current.value;
    setStatus(selectedFulfillment);
    setFulfillmentColor(selectedFulfillment);
  };

  return (
    <Select
      backgroundColor={bgcolor}
      borderColor={bgcolor}
      color="white"
      defaultValue={fulfillment}
      onChange={changeFulfillment}
      ref={fulfillmentSelector}
    >
      <option value="Fulfilled">Fulfilled</option>
      <option value="Unfulfilled">Unfulfilled</option>
      <option value="Pending Receipt">Pending Receipt</option>
    </Select>
  );
};

//format invoice id to -> xxx xxx
//return text component with invoice date
const InvoiceFormatter = (props: any) => {
  const invoiceId = props.invoiceId.toString();
  const invoiceFirst = invoiceId.slice(0, 3);
  const invoiceLast = invoiceId.slice(3, 6);
  const formattedInvoiceId = invoiceFirst + " " + invoiceLast;

  return (
    <Heading as="h6" color="blue.500" size="md">
      {formattedInvoiceId}
    </Heading>
  );
};

//Compare date with current date and return today/yesterday
//TODO: convert date format from dd/mm/yyyy to MMM DD, YYYY
const DateFormatter = (props: any) => {
  let date = props.date;

  const ddmmyyyy = date.split("/");
  const invoice_dd: number = parseInt(ddmmyyyy[0]);
  const invoice_mm: number = parseInt(ddmmyyyy[1]);
  const invoice_yyyy: number = parseInt(ddmmyyyy[2]);

  const today = new Date();
  const today_dd: number = parseInt(String(today.getDate()).padStart(2, "0"));
  const today_mm: number = parseInt(
    String(today.getMonth() + 1).padStart(2, "0")
  ); //January is 0!
  const today_yyyy: number = today.getFullYear();
  const yesterday_dd = today_dd - 1;

  if (invoice_yyyy === today_yyyy && invoice_mm === today_mm) {
    if (invoice_dd === today_dd) {
      date = "Today";
    } else if (invoice_dd === yesterday_dd) {
      date = "Yesterday";
    }
  }

  return <Text fontSize="lg">{date}</Text>;
};

const OrderRow = ({ filter }: FilterProps) => {
  const { orderData } = useData()!;
  const [filteredData, setFilteredData] = useState(orderData);

  useEffect(() => {
    setFilteredData(orderData);
    if (filter === "unpaid") {
      setFilteredData((f) =>
        f.filter((rowdata) =>
          rowdata.status.toLowerCase().includes("authorized")
        )
      );
    } else if (filter === "unfulfilled") {
      setFilteredData((f) =>
        f.filter((rowdata) =>
          rowdata.fulfillment.toLowerCase().includes("unfulfilled")
        )
      );
    } else if (filter === "active") {
      setFilteredData((f) =>
        f.filter((rowdata) =>
          rowdata.fulfillment.toLowerCase().includes("pending receipt")
        )
      );
    }
  }, [filter, orderData]);

  return (
    <>
      <TableHeader />
      {filteredData.map((filteredName) => (
        <RowContainer key={filteredName.order_id}>
          <Cell>
            <Checkbox border="1px" borderRadius="md" borderColor="gray.200" />
          </Cell>
          <Cell className="order-id">
            <InvoiceFormatter invoiceId={filteredName.order_id} />
          </Cell>
          <Cell>
            <DateFormatter date={filteredName.created_date} />
          </Cell>
          <Cell>
            <Avatar
              mr={2}
              showBorder
              name={filteredName.customer_first_name}
              src={filteredName.customer_avatar}
            />
            <Text px={1}>{filteredName.customer_first_name}</Text>
            <Text isTruncated px={1}>
              {filteredName.customer_last_name}
            </Text>
          </Cell>
          <Cell>
            <FulfilmentSelector fulfillment={filteredName.fulfillment} />
          </Cell>
          <Cell>
            <Text fontSize="lg">{filteredName.amount_total}</Text>
          </Cell>
          <Cell>
            <Text fontSize="lg">{filteredName.amount_profit}</Text>
          </Cell>
          <Cell>
            <StatusSelector status={filteredName.status}></StatusSelector>
          </Cell>
          <Cell>
            <DateFormatter date={filteredName.update} />
          </Cell>
        </RowContainer>
      ))}
    </>
  );
};

export default OrderRow;
